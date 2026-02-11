import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the submission (replace with email service in production)
    console.log("Campaign submission received:", JSON.stringify(data, null, 2));

    // In production, integrate with an email service like:
    // - SendGrid
    // - Resend
    // - AWS SES
    // Example:
    // await sendEmail({
    //   to: "team@flowdemand.com",
    //   subject: `New Campaign Brief: ${data.campaignType} from ${data.companyName}`,
    //   body: formatCampaignEmail(data),
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
