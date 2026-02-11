import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const COMPANY_TYPES: Record<string, string> = {
  manufacturer: "Manufacturer",
  "rep-agency": "Rep Agency",
  distributor: "Distributor",
};

const GOALS: Record<string, string> = {
  "product-launch": "New Product Launch",
  clearance: "Inventory Clearance",
  spiff: "Commission Spiff Program",
  rebate: "Rebate / Incentive Push",
  event: "Counter Days / Lunch & Learns",
  brand: "Brand Awareness",
  spec: "Specification Campaign",
  seasonal: "Seasonal / Quarterly Push",
  other: "Other",
};

const CHANNELS: Record<string, string> = {
  linkedin: "LinkedIn",
  email: "Email",
  phone: "Phone",
  handwritten: "Handwritten Mailers",
  ads: "Digital Ads",
  podcast: "Podcast",
  social: "Social Media",
  events: "Events / Trade Shows",
};

const NETWORK_SIZES: Record<string, string> = {
  small: "Small (10 or fewer rep firms)",
  medium: "Medium (11–20 rep firms)",
  large: "Large (Over 20 rep firms)",
};

function buildEmailHtml(data: {
  companyType: string;
  goal: string;
  goalOther: string;
  channels: string[];
  description: string;
  networkSize: string;
  companyName: string;
  contactName: string;
  email: string;
}): string {
  const goalLabel =
    data.goal === "other"
      ? `Other: ${data.goalOther}`
      : GOALS[data.goal] || data.goal;

  const channelList = data.channels
    .map((ch) => CHANNELS[ch] || ch)
    .join(", ");

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
        New Campaign Brief
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #64748b; width: 160px; vertical-align: top;">Company</td>
          <td style="padding: 10px 12px;">${data.companyName}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 12px; font-weight: bold; color: #64748b; vertical-align: top;">Contact</td>
          <td style="padding: 10px 12px;">${data.contactName} &lt;${data.email}&gt;</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #64748b; vertical-align: top;">Company Type</td>
          <td style="padding: 10px 12px;">${COMPANY_TYPES[data.companyType] || data.companyType}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 12px; font-weight: bold; color: #64748b; vertical-align: top;">Campaign Goal</td>
          <td style="padding: 10px 12px;">${goalLabel}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #64748b; vertical-align: top;">Channels</td>
          <td style="padding: 10px 12px;">${channelList}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 12px; font-weight: bold; color: #64748b; vertical-align: top;">Network Size</td>
          <td style="padding: 10px 12px;">${NETWORK_SIZES[data.networkSize] || data.networkSize}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #64748b; vertical-align: top;">Description</td>
          <td style="padding: 10px 12px; white-space: pre-wrap;">${data.description}</td>
        </tr>
      </table>

      <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
        Submitted via FlowDemand campaign wizard
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmails = (process.env.CAMPAIGN_MAIL_TO || "nicolas@flowrms.com")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    await resend.emails.send({
      from: fromEmail,
      to: toEmails,
      subject: `New Campaign Brief: ${data.companyName} — ${GOALS[data.goal] || data.goal}`,
      html: buildEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Campaign submission error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 },
    );
  }
}
