import { NextResponse } from "next/server";
import { sendMail } from "@/service/mailService";

export async function GET() {
  const res = sendMail(
    "Hello from yvan",
    "testfiberitch@gmail.com",
    "This is a test"
  );

  if (res) {
    return NextResponse.json({ message: "Hello from Next.js!" });
  }
}

export async function POST(req, context) {
  const data = await req.json();

  console.log(data);

  try {
    const res = await sendMail(
      `Hello You receive a Contact Mail from  ${data.firstName}  ${data.lastName}`,
      `${data.email}`,
      `${data.message}`
    );

    if (res) {
      console.log("tt");
      return NextResponse.json(
        { message: "Email Sent Succes" },
        {
          status: 200,
        }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { message: `${err.message}` },
      {
        status: 400,
      }
    );
  }
}
