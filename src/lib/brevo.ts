const brevoContactsUrl = "https://api.brevo.com/v3/contacts";
const brevoTransactionalEmailUrl = "https://api.brevo.com/v3/smtp/email";

type BrevoContactInput = {
  email: string;
  listIds: number[];
  attributes?: Record<string, string>;
};

type BrevoEmailInput = {
  sender: {
    name: string;
    email: string;
  };
  to: Array<{
    email: string;
    name?: string;
  }>;
  replyTo?: {
    email: string;
    name?: string;
  };
  subject: string;
  htmlContent: string;
  textContent: string;
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function parseBrevoListId(value: string | undefined) {
  const listId = Number(value);
  return Number.isInteger(listId) && listId > 0 ? listId : null;
}

async function parseBrevoError(response: Response, fallback: string) {
  try {
    const error = await response.json();
    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof error.message === "string"
    ) {
      return error.message;
    }
  } catch {
    // Keep the fallback when Brevo returns a non-JSON body.
  }

  return fallback;
}

export async function addBrevoContact({
  email,
  listIds,
  attributes,
}: BrevoContactInput) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("Brevo API key is not configured.");
  }

  const response = await fetch(brevoContactsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds,
      attributes,
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    throw new Error(
      await parseBrevoError(
        response,
        "We could not save this contact in Brevo."
      )
    );
  }
}

export async function sendBrevoEmail(input: BrevoEmailInput) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("Brevo API key is not configured.");
  }

  const response = await fetch(brevoTransactionalEmailUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(
      await parseBrevoError(
        response,
        "We could not send the notification email."
      )
    );
  }
}
