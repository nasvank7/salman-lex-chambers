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

  const [notifyResult, ackResult] = await Promise.all([
    // Email to the firm
    resend.emails.send({
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
    }),

    // Acknowledgement email to the client
    resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: RECIPIENT_EMAIL,
      subject: `We have received your enquiry — Salman Lex Chambers`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#f9f7f4;padding:32px;border:1px solid #ddd;">
          <!-- Header -->
          <div style="border-bottom:1px solid #e0dbd4;padding-bottom:20px;margin-bottom:24px;">
            <h2 style="font-size:1.3rem;color:#1a1a2e;margin:0 0 4px 0;font-weight:600;">Salman Lex Chambers</h2>
            <p style="font-size:0.72rem;color:#888;margin:0;letter-spacing:0.08em;text-transform:uppercase;">Advocates & Legal Consultants, Manjeri</p>
          </div>

          <p style="font-size:0.95rem;color:#333;line-height:1.7;margin-bottom:16px;">
            Dear ${name},
          </p>
          <p style="font-size:0.9rem;color:#555;line-height:1.75;margin-bottom:16px;">
            Thank you for reaching out to Salman Lex Chambers. We acknowledge receipt of your enquiry regarding <strong style="color:#1a1a2e;">${matterLabel}</strong> and wish to inform you that your message has been duly received.
          </p>
          <p style="font-size:0.9rem;color:#555;line-height:1.75;margin-bottom:24px;">
            A member of our team will review your matter and contact you within <strong style="color:#1a1a2e;">24 hours</strong> to schedule a consultation at your earliest convenience. Kindly note that all communications with our office are strictly confidential and protected by attorney-client privilege.
          </p>

          <!-- Summary box -->
          <div style="background:#fff;border:1px solid #e0dbd4;padding:20px;margin-bottom:24px;">
            <p style="font-size:0.72rem;color:#888;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 12px 0;">Your Enquiry Summary</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;color:#333;">
              <tr>
                <td style="padding:5px 0;color:#888;width:120px;">Matter</td>
                <td style="padding:5px 0;font-weight:600;">${matterLabel}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;">Submitted</td>
                <td style="padding:5px 0;">${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</td>
              </tr>
            </table>
          </div>

          <p style="font-size:0.9rem;color:#555;line-height:1.75;margin-bottom:6px;">
            Should you have any urgent queries in the interim, please do not hesitate to contact us directly:
          </p>
          <p style="font-size:0.85rem;color:#333;line-height:1.9;margin-bottom:24px;">
            📞 <a href="tel:+917306647233" style="color:#1B3D6E;text-decoration:none;">+91 73066 47233</a><br/>
            ✉️ <a href="mailto:salmanlexchambers@gmail.com" style="color:#1B3D6E;text-decoration:none;">salmanlexchambers@gmail.com</a>
          </p>

          <p style="font-size:0.9rem;color:#555;line-height:1.75;margin-bottom:4px;">
            Yours sincerely,
          </p>
          <p style="font-size:0.9rem;color:#1a1a2e;font-weight:600;margin:0;">Salman Lex Chambers</p>
          <p style="font-size:0.78rem;color:#888;margin:2px 0 0 0;">Advocates & Legal Consultants, Manjeri, Malappuram</p>

          <hr style="border:none;border-top:1px solid #e0dbd4;margin-top:28px;" />
          <p style="font-size:0.68rem;color:#bbb;margin-top:14px;line-height:1.6;">
            This is an automated acknowledgement. Please do not reply to this email directly — use the contact details above to reach us. This communication is intended solely for the named recipient and may be privileged and confidential.
          </p>
        </div>
      `,
    }),
  ]);

  if (notifyResult.error || ackResult.error) {
    console.error("Resend error:", notifyResult.error ?? ackResult.error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
