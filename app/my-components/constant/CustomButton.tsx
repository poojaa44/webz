import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CustomButton = ({
  classValues,
  route = "/contact-us",
  btnText = "Learn More",
}: {
  classValues?: string;
  route?: string;
  btnText?: string;
}) => {
  return (
    <Button
      className={`${classValues} lg:text-lg bg-accent-orange hover:bg-accent-red/50`}
      asChild
    >
      <Link href={route}> {btnText}</Link>
    </Button>
  );
};
