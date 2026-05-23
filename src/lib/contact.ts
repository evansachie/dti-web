export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  subject: string;
  message: string;
  newsletterOptIn: boolean;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message.");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    if (error instanceof Error) throw error;
    throw new Error("Failed to send message. Please try again later.");
  }
}
