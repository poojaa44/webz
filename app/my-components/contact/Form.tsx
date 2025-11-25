"use client";
import { submitForm } from "@/app/actions/sendMail";
import { ActionResponse } from "@/app/types/jsonDataTypes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useActionState } from "react";
import { success } from "zod/v4";
const initialState: ActionResponse = {
  success: false,
  message: "",
};
const service = [
  "Seo",
  "Google Ads",
  " Social Media Maketing",
  "Web Development",
  "Hosting Support",
  "Content Marketing",
];

const Form = () => {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );
  const [formKey, setFormKey] = React.useState(0);
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      setFormKey((prev) => prev + 1);
      router.push("/thank-you");
    }
  }, [state.success]);

  return (
    <div className="text-text">
      <form
        key={formKey}
        action={formAction}
        className="space-y-4 flex flex-col items-center 
      "
      >
        <fieldset className="border border-white rounded-md w-full">
          <legend className="text-teal-50 px-2 ml-4">Full name</legend>
          <Input
            className="border-none focus-visible:ring-0"
            type="text"
            id="fullname"
            name="fullName"
            defaultValue={state?.inputs?.fullName}
          />
        </fieldset>
        {state.errors?.fullName && (
          <p className="text-red-500 font-semibold text-sm self-start">
            *{state.errors.fullName}
          </p>
        )}
        <fieldset className="border border-white rounded-md w-full">
          <legend className="text-teal-50 px-2 ml-4">Email</legend>
          <Input
            className="border-none focus-visible:ring-0"
            type="email"
            id="email"
            name="email"
            defaultValue={state?.inputs?.email}
          />
        </fieldset>
        {state.errors?.email && (
          <p className="text-red-500 font-semibold text-sm self-start">
            *{state.errors.email}
          </p>
        )}
        <fieldset className="border border-white rounded-md w-full">
          <legend className="text-teal-50 px-2 ml-4">Phone Number</legend>
          <Input
            className="border-none focus-visible:ring-0"
            type="text"
            id="phone"
            name="phone"
            defaultValue={state?.inputs?.phone}
          />
        </fieldset>
        {state.errors?.phone && (
          <p className="text-red-500 font-semibold text-sm self-start">
            *{state.errors.phone}
          </p>
        )}
        <fieldset className="border border-white rounded-md w-full">
          <legend className="text-teal-50 px-2 ml-4">Select a Service</legend>
          <Select value={state?.inputs?.service} name="service">
            <SelectTrigger className="w-full border-none data-[placeholder]:text-text! focus-visible:ring-0 ">
              <SelectValue
                className="  "
                placeholder=" - Please choose and option -"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {service.map((data, i) => {
                  return (
                    <SelectItem
                      className="focus:bg-accent-orange/30"
                      key={i}
                      value={data}
                    >
                      {data}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </fieldset>
        {state.errors?.service && (
          <p className="text-red-500 font-semibold text-sm self-start">
            *{state.errors.service}
          </p>
        )}
        <fieldset className="border border-white rounded-md w-full">
          <legend className="text-teal-50 px-2 ml-4">Message</legend>
          <textarea
            className="w-full border-none focus-visible:border-none outline-none text-text px-3"
            id="message"
            name="message"
            defaultValue={state?.inputs?.message}
          />
        </fieldset>

        <Button
          className="text-text w-fit  bg-accent-orange px-5 py-2 hover:bg-accent-red cursor-pointer rounded-xl text-center"
          type="submit"
          value="Submit"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
