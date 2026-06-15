import {
  addBrevoContact,
  isValidEmail,
  parseBrevoListId,
  sendBrevoEmail,
} from "@/lib/brevo";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  subject: string;
  message: string;
  newsletterOptIn?: boolean;
  companyWebsite?: string;
};

const subjectLabels: Record<string, string> = {
  partnership: "Partnership Inquiry",
  project: "Project Collaboration",
  workshop: "Workshop Booking",
  donation: "Donation / Support",
  media: "Media / Press",
  other: "Other",
};

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizePayload(body: unknown): ContactPayload {
  const data = body && typeof body === "object" ? body : {};

  return {
    fullName: cleanField("fullName" in data ? data.fullName : ""),
    email: cleanField("email" in data ? data.email : "").toLowerCase(),
    phone: cleanField("phone" in data ? data.phone : ""),
    organisation: cleanField("organisation" in data ? data.organisation : ""),
    subject: cleanField("subject" in data ? data.subject : ""),
    message: cleanField("message" in data ? data.message : ""),
    newsletterOptIn:
      "newsletterOptIn" in data ? Boolean(data.newsletterOptIn) : false,
    companyWebsite: cleanField(
      "companyWebsite" in data ? data.companyWebsite : ""
    ),
  };
}

function validatePayload(payload: ContactPayload) {
  if (!payload.fullName) return "Please enter your full name.";
  if (!isValidEmail(payload.email))
    return "Please enter a valid email address.";
  if (!payload.subject) return "Please select a subject.";
  if (!payload.message) return "Please enter your message.";
  return null;
}

function buildEmailContent(payload: ContactPayload) {
  const subjectLabel = subjectLabels[payload.subject] ?? payload.subject;
  const fields = [
    ["Name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Organisation", payload.organisation || "Not provided"],
    ["Subject", subjectLabel],
    ["Newsletter opt-in", payload.newsletterOptIn ? "Yes" : "No"],
  ];

  const textContent = [
    "New DTI website contact form submission",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#252A34;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#3f3f46;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  const htmlContent = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#252A34;">
      <h1 style="font-size:22px;margin:0 0 16px;">New DTI website enquiry</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px;margin-bottom:24px;">
        ${htmlRows}
      </table>
      <h2 style="font-size:16px;margin:0 0 8px;">Message</h2>
      <p style="white-space:pre-wrap;color:#3f3f46;">${escapeHtml(payload.message)}</p>
    </div>`;

  return {
    subjectLabel,
    textContent,
    htmlContent,
  };
}

function buildConfirmationEmailContent(payload: ContactPayload) {
  const textContent = [
    `Hello ${payload.fullName},`,
    "",
    "Thank you for contacting Developmental Theatre Initiative (DTI). We have received your message and our team will review it shortly.",
    "",
    "We typically respond within 1-2 business days.",
    "",
    "A copy of your message:",
    payload.message,
    "",
    "Regards,",
    "Developmental Theatre Initiative",
  ].join("\n");

  const htmlContent = `
    <div style="font-family:Arial,sans-serif;line-height:1.7;color:#252A34;">
      <h1 style="font-size:22px;margin:0 0 16px;">Thank you for contacting DTI</h1>
      <p>Hello ${escapeHtml(payload.fullName)},</p>
      <p>Thank you for contacting Developmental Theatre Initiative (DTI). We have received your message and our team will review it shortly.</p>
      <p>We typically respond within 1-2 business days.</p>
      <div style="margin:24px 0;padding:16px;border-left:4px solid #24a186;background:#f8fafa;">
        <p style="margin:0 0 8px;font-weight:700;">A copy of your message:</p>
        <p style="margin:0;white-space:pre-wrap;color:#3f3f46;">${escapeHtml(payload.message)}</p>
      </div>
      <p>Regards,<br />Developmental Theatre Initiative</p>
    </div>`;

  return {
    textContent,
    htmlContent,
  };
}

async function addContactToLists(payload: ContactPayload) {
  const contactListId = parseBrevoListId(process.env.BREVO_CONTACTS_LIST_ID);
  const newsletterListId = payload.newsletterOptIn
    ? parseBrevoListId(process.env.BREVO_NEWSLETTER_LIST_ID)
    : null;
  const listIds = [contactListId, newsletterListId].filter((id): id is number =>
    Boolean(id)
  );

  if (listIds.length === 0) return;

  await addBrevoContact({
    email: payload.email,
    listIds,
  });
}

export async function POST(request: Request) {
  const toEmail = process.env.BREVO_CONTACT_TO_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME ?? "DTI Website";

  if (!toEmail || !senderEmail) {
    return Response.json(
      { message: "Contact email is not configured yet." },
      { status: 500 }
    );
  }

  if (!isValidEmail(toEmail) || !isValidEmail(senderEmail)) {
    return Response.json(
      { message: "Contact email configuration is invalid." },
      { status: 500 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Please complete the contact form and try again." },
      { status: 400 }
    );
  }

  const payload = normalizePayload(body);

  if (payload.companyWebsite) {
    return Response.json({
      message: "Thank you! Your message has been sent successfully.",
    });
  }

  const validationError = validatePayload(payload);

  if (validationError) {
    return Response.json({ message: validationError }, { status: 400 });
  }

  const { subjectLabel, textContent, htmlContent } = buildEmailContent(payload);

  try {
    await sendBrevoEmail({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: toEmail,
          name: "DTI",
        },
      ],
      replyTo: {
        email: payload.email,
        name: payload.fullName,
      },
      subject: `New website enquiry: ${subjectLabel}`,
      htmlContent,
      textContent,
    });
  } catch (error: unknown) {
    return Response.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "We could not send your message right now.",
      },
      { status: 502 }
    );
  }

  try {
    const confirmation = buildConfirmationEmailContent(payload);

    await sendBrevoEmail({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: payload.email,
          name: payload.fullName,
        },
      ],
      replyTo: {
        email: toEmail,
        name: "DTI",
      },
      subject: "We received your message",
      htmlContent: confirmation.htmlContent,
      textContent: confirmation.textContent,
    });
  } catch (error: unknown) {
    console.error("Brevo contact confirmation email failed:", error);
  }

  try {
    await addContactToLists(payload);
  } catch (error: unknown) {
    console.error("Brevo contact list update failed:", error);
  }

  return Response.json({
    message: "Thank you! Your message has been sent successfully.",
  });
}
