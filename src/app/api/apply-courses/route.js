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
    subject: `Course Application - ${body.courseTitle}`,
    text: `
      New Course Application Received!

      Course Applied For: ${body.courseTitle}
      
      Applicant Details:
      Name: ${body.firstName} ${body.lastName}
      Email: ${body.email}
      Phone: ${body.phone}
      Education: ${body.education}
      Graduation Year: ${body.year}
    `,
    html: `
      <h2>New Course Application Received!</h2>
      <p><strong>Course Applied For:</strong> ${body.courseTitle}</p>
      <hr/>
      <h3>Applicant Details</h3>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Education:</strong> ${body.education}</p>
      <p><strong>Graduation Year:</strong> ${body.year}</p>
    `,
  });

  return Response.json({ success: true });
}