import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { SITE } from "@/lib/constants"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { nom, email, sujet, message, website } = body

  // Honeypot : si le champ caché est rempli, c'est un bot — on répond OK sans rien envoyer
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!nom || !email || !message) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: SITE.email,
      replyTo: email,
      subject: sujet || `Nouveau message de ${nom}`,
      text: `Nom : ${nom}\nEmail : ${email}\n\n${message}`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 })
  }
}
