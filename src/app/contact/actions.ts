"use server";

export async function submitForm(prevState: { success?: boolean; message?: string } | null, formData: FormData) {

  const service = formData.get("service") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const budget = formData.get("budget") as string;
  const project = formData.get("project") as string;

  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN || "8648047856:AAHbWZ_PMCfd-LQH1oc4Np0QMOBM8D_ar50";
    const chatId = process.env.TELEGRAM_CHAT_ID || "5806909469";
    
    const message = `
🌟 <b>New Service Request</b>
<b>Service:</b> ${service}
<b>Name:</b> ${name}
<b>Phone:</b> ${phone}
<b>Email:</b> ${email}
<b>Budget:</b> ${budget}

<b>Project Brief:</b>
${project}
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return { success: true, message: "Thank you! Your request has been submitted successfully." };
  } catch (error) {
    console.error("Telegram sending failed:", error);
    return { success: false, message: "Sorry, there was an error submitting your request. Please try again." };
  }
}