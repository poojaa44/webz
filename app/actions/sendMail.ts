"use server";

import { z } from "zod";
import { ActionResponse, SubmitData } from "../types/jsonDataTypes";
import nodemailer from "nodemailer";
import { clientHtml, userHtml } from "@/lib/templates";

const FormSchema = z.object({
  fullName: z.string().min(2, "full name is required"),
  email: z.string().trim().email("invalid email formay"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid international phone number"),
  service: z.enum(
    [
      "Seo",
      "Google Ads",
      " Social Media Maketing",
      "Web Development",
      "Hosting Support",
      "Content Marketing",
    ],
    {
      errorMap: () => ({ message: "Please select a service." }),
    }
  ),
  message: z.string().max(100, "Maximum word count reached"),
});

export async function submitForm(
  prevState: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawDataObject: SubmitData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    const validatedData = FormSchema.safeParse(rawDataObject);
    if (!validatedData.success) {
      return {
        success: false,
        message: "Some error occured in formData",
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawDataObject,
      };
    }

    console.log("Address submitted:", validatedData.data);

    //create transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Mail_BOT_EMAIL,
        pass: process.env.Mail_BOT_PASSWORD,
      },
    });

    const fromAddr = `"Pooja" <${process.env.MAIL_BOT_EMAIL}>`;

    const mailOptionsClientUser = {
      from: fromAddr,
      to: validatedData.data.email,
      subject: "Thanks for reaching out to Webz 🌟",
      html: userHtml(validatedData.data.fullName),
    };
    const mailOptionsClientHelper = {
      from: fromAddr,
      to: `${process.env.MAIL_BOT_EMAIL}`,
      subject: `Enquiry for service -  ${validatedData.data.service} 🌟`,
      html: clientHtml(validatedData.data),
    };

    await Promise.all([
      transporter.sendMail(mailOptionsClientUser),
      transporter.sendMail(mailOptionsClientHelper),
    ]);

    return {
      success: true,
      message: "form Submitted Succesfully",
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: "An unexpected error occurred" };
  }
}
