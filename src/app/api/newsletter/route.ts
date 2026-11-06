import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = (body.email || "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        { ok: false, error: "Newsletter service not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        email: email,
        subject: "New Newsletter Subscriber! 🎉",
        from_name: "Trillion Dollar Tweets",
        message: `A new user subscribed to your newsletter: ${email}`,
      }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, error: data?.message || "Failed to submit" },
      { status: response.status || 400 }
    );
  } catch (error) {
    console.error("Newsletter submission error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

