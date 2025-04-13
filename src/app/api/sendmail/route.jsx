import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // 🛑 Check if request body exists
    if (!req.body) {
      return NextResponse.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }

    const body = await req.json();
    console.log("Received Data:", body); // 👉 Debugging purpose
    const { email, number, name, message } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: "ajmalshahan23@gmail.com",
        pass: "omrd xkgi yhed oglo",
      },
    });

    let mailOptions = {
      from: email,
      to: "officialzedro@gmail.com",
      subject: `Mail from ${email}`,
      text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
