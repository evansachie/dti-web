import { addBrevoContact, isValidEmail, parseBrevoListId } from "@/lib/brevo";

export async function POST(request: Request) {
  const listId = parseBrevoListId(process.env.BREVO_NEWSLETTER_LIST_ID);

  if (!listId) {
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
  const companyWebsite =
    body && typeof body === "object" && "companyWebsite" in body
      ? String(body.companyWebsite).trim()
      : "";

  if (companyWebsite) {
    return Response.json({
      message: "You're subscribed. Thank you for joining the TFDI newsletter.",
    });
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    await addBrevoContact({ email, listIds: [listId] });
  } catch (error: unknown) {
    return Response.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Newsletter service is temporarily unavailable.",
      },
      { status: 502 }
    );
  }

  return Response.json({
    message: "You're subscribed. Thank you for joining the TFDI newsletter.",
  });
}
