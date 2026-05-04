import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { type, naam, email, telefoon, adres, postcode, stad, automerk, folie, tint, dagdelen, opmerkingen } = body;

    if (!naam || !email) {
      return NextResponse.json({ error: "Naam en e-mailadres zijn verplicht." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!apiKey || !contactEmail) {
      return NextResponse.json({ error: "Server configuratie ontbreekt." }, { status: 500 });
    }

    const isAfspraak = type === "afspraak";
    const onderwerp = isAfspraak ? `Nieuwe afspraak aanvraag van ${naam}` : `Nieuwe vraag van ${naam}`;

    const row = (label: string, value: string) =>
      `<tr style="border-bottom:1px solid #eee;">
        <td style="padding:8px 12px;font-weight:bold;color:#666;white-space:nowrap;">${label}</td>
        <td style="padding:8px 12px;">${escapeHtml(value)}</td>
       </tr>`;

    const dagdelenTekst = Array.isArray(dagdelen) && dagdelen.length > 0
      ? dagdelen.join(", ")
      : null;

    const html = `
      <h2 style="font-family:sans-serif;">${escapeHtml(onderwerp)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">
        ${row("Type", isAfspraak ? "Afspraak inplannen" : "Vraag")}
        ${row("Naam", naam)}
        ${row("E-mail", email)}
        ${telefoon ? row("Telefoon", telefoon) : ""}
        ${adres ? row("Adres", adres) : ""}
        ${postcode ? row("Postcode", postcode) : ""}
        ${stad ? row("Stad", stad) : ""}
        ${automerk ? row("Auto", automerk) : ""}
        ${folie ? row("Folie", folie) : ""}
        ${tint ? row("Tint", tint) : ""}
        ${dagdelenTekst ? row("Beschikbare dagdelen", dagdelenTekst) : ""}
        ${opmerkingen
          ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;">${isAfspraak ? "Opmerkingen" : "Vraag"}</td>
             <td style="padding:8px 12px;">${escapeHtml(opmerkingen).replace(/\n/g, "<br>")}</td></tr>`
          : ""}
      </table>
    `;

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Intint Website <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: onderwerp,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Er is een fout opgetreden bij het verzenden." }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
