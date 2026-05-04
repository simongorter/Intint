import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { naam, email, telefoon, autotype, automerk, folie, opmerkingen } =
      body;

    if (!naam || !email) {
      return NextResponse.json(
        { error: "Naam en e-mailadres zijn verplicht." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!apiKey || !contactEmail) {
      return NextResponse.json(
        { error: "Server configuratie ontbreekt." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Intint Website <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Nieuwe aanvraag van ${naam}`,
      html: `
        <h2>Nieuwe offerte-aanvraag via intint.nl</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr style="border-bottom:1px solid #eee;">
            <td style="padding:8px 12px;font-weight:bold;color:#666;">Naam</td>
            <td style="padding:8px 12px;">${escapeHtml(naam)}</td>
          </tr>
          <tr style="border-bottom:1px solid #eee;">
            <td style="padding:8px 12px;font-weight:bold;color:#666;">E-mail</td>
            <td style="padding:8px 12px;">${escapeHtml(email)}</td>
          </tr>
          ${telefoon ? `<tr style="border-bottom:1px solid #eee;"><td style="padding:8px 12px;font-weight:bold;color:#666;">Telefoon</td><td style="padding:8px 12px;">${escapeHtml(telefoon)}</td></tr>` : ""}
          ${autotype ? `<tr style="border-bottom:1px solid #eee;"><td style="padding:8px 12px;font-weight:bold;color:#666;">Autotype</td><td style="padding:8px 12px;">${escapeHtml(autotype)}</td></tr>` : ""}
          ${automerk ? `<tr style="border-bottom:1px solid #eee;"><td style="padding:8px 12px;font-weight:bold;color:#666;">Automerk &amp; model</td><td style="padding:8px 12px;">${escapeHtml(automerk)}</td></tr>` : ""}
          ${folie ? `<tr style="border-bottom:1px solid #eee;"><td style="padding:8px 12px;font-weight:bold;color:#666;">Gewenste folie</td><td style="padding:8px 12px;">${escapeHtml(folie)}</td></tr>` : ""}
          ${opmerkingen ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;">Opmerkingen</td><td style="padding:8px 12px;">${escapeHtml(opmerkingen).replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Er is een fout opgetreden bij het verzenden." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
