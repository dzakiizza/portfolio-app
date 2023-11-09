"use client";
import { ContactFormType } from "@/app/api/send/route";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { toast } from "react-toastify";
import HeaderSection from "./header-section";
import MotionWrapper from "./motion-wrapper";
import EmailValidator from "email-validator";
import { siteConfig } from "@/config/site";

const ContactSection = () => {
  const { handleSubmit, register, reset, formState } =
    useForm<ContactFormType>();

  const { errors, isSubmitting } = formState;

  const onSubmit = React.useCallback(async () => {
    handleSubmit((data) => {
      toast.promise(send_email(data), {
        pending: "Sending messages...",
        success: "Messages sent",
        error: "Error while sending a message",
      });
      reset();
    })();
  }, [handleSubmit, reset]);

  return (
    <section id="contact" className="mb-20">
      <MotionWrapper>
        <HeaderSection content="Contact me" line="both" />
        <div className="relative grid gap-10 md:grid-cols-2">
          <div>
            <h5 className="my-2 text-xl font-bold text-white">
              Let&apos;s Connect
            </h5>
            <p className="mb-4 max-w-md text-[#ADB7BE]">
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href={siteConfig.links.github} target="_blank">
                <AiFillGithub size={48} />
              </Link>
              <Link href={siteConfig.links.linkedin} target="_blank">
                <AiFillLinkedin size={48} />
              </Link>
            </div>
          </div>
          <div>
            <form className="flex flex-col">
              <Input
                size="sm"
                type="email"
                label="Email"
                placeholder="Enter your email"
                className="mb-6"
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email?.message}
                {...register("email", {
                  required: {
                    message: "This field cant be empty",
                    value: true,
                  },
                  validate: isValidEmail,
                })}
              />
              <Input
                size="sm"
                label="Subject"
                placeholder="Enter your email subject"
                className="mb-6"
                errorMessage={errors.subject?.message}
                isInvalid={!!errors.subject?.message}
                {...register("subject", {
                  required: {
                    message: "This field cant be empty",
                    value: true,
                  },
                })}
              />
              <Textarea
                label="Message"
                placeholder="Enter your message"
                className="mb-6"
                errorMessage={errors.message?.message}
                isInvalid={!!errors.message?.message}
                {...register("message", {
                  required: {
                    message: "This field cant be empty",
                    value: true,
                  },
                })}
              />
              <Button
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                onClick={onSubmit}
                isDisabled={isSubmitting}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

const send_email = async (data: ContactFormType) => {
  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/send";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);

  if (response.status !== 200) {
    throw new Error("Error");
  }
};

const isValidEmail = (email: string) => {
  if (!EmailValidator.validate(email)) {
    return "Email is not valid";
  }
  return true;
};

export default ContactSection;
