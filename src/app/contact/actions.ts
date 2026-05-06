import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(prevState: any, formData: FormData) {
  "use server";

  const service = formData.get("service") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const budget = formData.get("budget") as string;
  const project = formData.get("project") as string;

  try {
    await resend.emails.send({
      from: "contact@neagramstudio.com", // You'll need to verify this domain in Resend
      to: "rezamaleki.artworks@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Project Brief:</strong></p>
        <p>${project.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, message: "Thank you! Your request has been submitted successfully." };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, message: "Sorry, there was an error submitting your request. Please try again." };
  }
}