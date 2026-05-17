import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "salmanlexchambers@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

const matterLabels: Record<string, string> = {
  criminal: "Criminal Law",
  family: "Family Disputes",
  civil: "Civil Litigation",
  corporate: "Corporate & Commercial",
  consumer: "Consumer Disputes",
  labour: "Labour & Service Matters",
  motor: "Motor Accident Claims",
  property: "Property & Real Estate",
  other: "Other",
};

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, matter, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const matterLabel = matterLabels[matter] ?? matter ?? "Not specified";

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Consultation Request — ${name} (${matterLabel})`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#f9f7f4;padding:32px;border:1px solid #ddd;">
        <h2 style="font-size:1.4rem;color:#1a1a2e;margin-bottom:4px;">New Consultation Request</h2>
        <p style="font-size:0.75rem;color:#888;margin-top:0;margin-bottom:24px;letter-spacing:0.05em;">Salman Lex Chambers — Website Enquiry</p>
        <hr style="border:none;border-top:1px solid #e0dbd4;margin-bottom:24px;" />
        <table style="width:100%;border-collapse:collapse;font-size:0.9rem;color:#333;">
          <tr>
            <td style="padding:8px 0;color:#666;width:140px;vertical-align:top;">Full Name</td>
            <td style="padding:8px 0;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666;vertical-align:top;">Email</td>
            <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1B3D6E;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666;vertical-align:top;">Phone</td>
            <td style="padding:8px 0;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666;vertical-align:top;">Legal Matter</td>
            <td style="padding:8px 0;">${matterLabel}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e0dbd4;margin:20px 0;" />
        <p style="color:#666;font-size:0.8rem;margin-bottom:8px;letter-spacing:0.05em;text-transform:uppercase;">Message</p>
        <p style="color:#333;font-size:0.9rem;line-height:1.7;white-space:pre-wrap;">${message}</p>
        <hr style="border:none;border-top:1px solid #e0dbd4;margin-top:24px;" />
        <p style="font-size:0.72rem;color:#aaa;margin-top:16px;">This message was submitted via the contact form at salmanlexchambers.com</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
