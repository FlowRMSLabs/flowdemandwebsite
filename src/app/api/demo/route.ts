import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the submission (replace with email service in production)
    console.log("Demo request received:", JSON.stringify(data, null, 2));

    // In production, integrate with an email service or calendar booking tool
    // Example:
    // await sendEmail({
    //   to: "team@flowdemand.com",
    //   subject: `Demo Request from ${data.name} at ${data.company}`,
    //   body: formatDemoEmail(data),
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
