import { ContactFormType } from "@/app/api/send/route";
import { subtitle, title } from "@/app/lib/primitives";
import clsx from "clsx";
import * as React from "react";

export const EmailTemplate = ({
  email,
  message,
}: Omit<ContactFormType, "subject">) => (
  <div className="container">
    <h1 className={clsx(title({ color: "violet", size: "sm" }), "mb-10")}>
      Hello, {email}!
    </h1>
    <p className={subtitle()}>
      Thank you for contacting me. I am appreciate your interest in me and
      I&apos;ll get back to you as soon as possible.
    </p>
    <p className={subtitle()}>
      I have received your message with the following details:
    </p>
    <p className={clsx(subtitle(), "mb-10 mt-10 font-medium")}>{message}</p>
    <p className={subtitle()}>
      Once again, thank you for reaching out to us. We look forward to assisting
      you and hope to provide you with the information or support you need.
    </p>
    <p className={clsx(subtitle(), "mb-10")}>Best regards,</p>
    <p className={subtitle()}>Dzaki Izza</p>
  </div>
);

export default EmailTemplate;
