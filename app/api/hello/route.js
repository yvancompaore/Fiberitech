import { NextResponse } from "next/server";
import { sendMail } from "@/service/mailService";

export async function GET() {
  const res = sendMail(
    "yvan.compaore@a.fr",
    "testfiberitch@gmail.com",
    "This is a test"
  );
  if (res) {
    return NextResponse.json({ message: "Hello from Next.js!" });
  }
}
