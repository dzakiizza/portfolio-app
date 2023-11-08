import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormType = {
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: "dzakiizza02@gmail.com",
      subject,
      react: EmailTemplate({ email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
