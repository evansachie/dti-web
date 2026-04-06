export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  const scriptURL = process.env.NEXT_PUBLIC_CONTACT_FORM_SCRIPT_URL;

  if (!scriptURL) {
    throw new Error("Contact Form script URL not configured");
  }

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
}
