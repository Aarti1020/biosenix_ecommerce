import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const subjectLabels = {
    business: "Business / Client Inquiry",
    jobs: "Job / Freelance Application",
    support: "Support",
    other: "Other",
  };

  const subjectLabel = subjectLabels[body.subject] || body.subject;

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
    replyTo: body.email,
    subject: `New Contact Form Submission - ${subjectLabel}`,
    text: `
      New Contact Form Submission!

      Subject: ${subjectLabel}

      Sender Details:
      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone || "Not provided"}

      Message:
      ${body.message}
    `,
    html: `
      <h2>New Contact Form Submission!</h2>
      <p><strong>Subject:</strong> ${subjectLabel}</p>
      <hr/>
      <h3>Sender Details</h3>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
      <hr/>
      <h3>Message</h3>
      <p>${body.message}</p>
    `,
  });

  return Response.json({ success: true });
}