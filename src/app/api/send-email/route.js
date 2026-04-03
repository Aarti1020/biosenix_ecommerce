import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `Job Application - ${body.jobTitle}`,
    text: `
      Name: ${body.firstName} ${body.lastName}
      Email: ${body.email}
      Phone: ${body.phone}
      Education: ${body.education}
      Year: ${body.year}
      Job: ${body.jobTitle}
    `,
  });

  return Response.json({ success: true });
}