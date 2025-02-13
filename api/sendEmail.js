import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, mobile, interest, message, appointmentDate } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change this if using another email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "hchaudhari754@gmail.com", // Change to dentist's email
      subject: "New Appointment Request",
      text: `You have a new appointment request:
      
      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Interest: ${interest}
      Appointment Date: ${appointmentDate}
      Message: ${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error sending email" });
  }
}
