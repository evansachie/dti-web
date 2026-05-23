const brevoContactsUrl = "https://api.brevo.com/v3/contacts";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);

  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    return Response.json(
      { message: "Newsletter signup is not configured yet." },
      { status: 500 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const email =
    body && typeof body === "object" && "email" in body
      ? String(body.email).trim().toLowerCase()
      : "";

  if (!isValidEmail(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  let response: Response;

  try {
    response = await fetch(brevoContactsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });
  } catch {
    return Response.json(
      { message: "Newsletter service is temporarily unavailable." },
      { status: 502 }
    );
  }

  if (!response.ok) {
    let message = "We could not subscribe you right now. Please try again.";

    try {
      const error = await response.json();
      if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof error.message === "string"
      ) {
        message = error.message;
      }
    } catch {
      // Keep the generic error message when Brevo returns a non-JSON body.
    }

    return Response.json({ message }, { status: response.status });
  }

  return Response.json({
    message: "You're subscribed. Thank you for joining the TFDI newsletter.",
  });
}
