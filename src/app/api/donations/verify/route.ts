const paystackVerifyUrl = "https://api.paystack.co/transaction/verify";

type PaystackVerifyResponse = {
  status: boolean;
  message: string;
  data?: {
    status?: string;
    reference?: string;
    amount?: number;
    currency?: string;
    customer?: {
      email?: string;
    };
  };
};

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanAmount(value: unknown) {
  const amount = typeof value === "number" ? value : Number(value);
  return Number.isFinite(amount) && amount > 0 ? amount : null;
}

export async function POST(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    return Response.json(
      { message: "Donation verification is not configured yet." },
      { status: 500 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Invalid donation verification request." },
      { status: 400 }
    );
  }

  const data = body && typeof body === "object" ? body : {};
  const reference = cleanField("reference" in data ? data.reference : "");
  const email = cleanField("email" in data ? data.email : "").toLowerCase();
  const expectedAmount = cleanAmount("amount" in data ? data.amount : null);

  if (!reference || !expectedAmount) {
    return Response.json(
      { message: "Donation reference and amount are required." },
      { status: 400 }
    );
  }

  let response: Response;

  try {
    response = await fetch(
      `${paystackVerifyUrl}/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          Accept: "application/json",
        },
      }
    );
  } catch {
    return Response.json(
      { message: "Unable to reach Paystack for verification." },
      { status: 502 }
    );
  }

  let result: PaystackVerifyResponse;

  try {
    result = await response.json();
  } catch {
    return Response.json(
      { message: "Paystack returned an invalid verification response." },
      { status: 502 }
    );
  }

  if (!response.ok || !result.status || result.data?.status !== "success") {
    return Response.json(
      { message: result.message || "Donation payment was not successful." },
      { status: 400 }
    );
  }

  const expectedAmountInPesewas = Math.round(expectedAmount * 100);

  if (result.data.amount !== expectedAmountInPesewas) {
    return Response.json(
      { message: "Donation amount could not be verified." },
      { status: 400 }
    );
  }

  if (result.data.currency !== "GHS") {
    return Response.json(
      { message: "Donation currency could not be verified." },
      { status: 400 }
    );
  }

  const verifiedEmail = result.data.customer?.email?.toLowerCase();

  if (email && verifiedEmail && verifiedEmail !== email) {
    return Response.json(
      { message: "Donation email could not be verified." },
      { status: 400 }
    );
  }

  return Response.json({
    message: "Donation verified successfully.",
    reference: result.data.reference ?? reference,
  });
}
