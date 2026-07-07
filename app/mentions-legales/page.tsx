import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site de La Main Tendue, association d'aide alimentaire et vestimentaire solidaire à Eysines (Gironde).",
}

export default function MentionsLegalesPage() {
  return (
    <main className="bg-paper pt-24 sm:pt-28 md:pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-[11px] tracking-[0.3em] uppercase text-terracotta font-semibold mb-3">
          Informations légales
        </div>
        <h1 className="font-display font-medium text-4xl md:text-5xl text-ink mb-10">
          Mentions légales
        </h1>

        <div className="space-y-10 text-[14px] text-ink-soft leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink mb-3">Éditeur du site</h2>
            <p>
              Le site {SITE.name} est édité par l'association <strong>La Main Tendue</strong>,
              {" "}{SITE.registration} ({SITE.legal}).
            </p>
            <ul className="mt-3 space-y-1">
              <li>Adresse : {SITE.address}</li>
              <li>Téléphone : {SITE.phone}</li>
              <li>E-mail : {SITE.email}</li>
              <li>SIRET : non communiqué</li>
            </ul>
            <p className="mt-3">
              Responsable de la publication : le Président de l'association La Main Tendue.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Hébergement</h2>
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-terracotta transition-colors">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Nom de domaine</h2>
            <p>
              Le nom de domaine lamaintendue33.fr est déposé auprès d'<strong>OVH SAS</strong>,
              2 rue Kellermann, 59100 Roubaix, France.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, photographies, logo, mise en
              page) est la propriété de l'association La Main Tendue, sauf mention contraire.
              Toute reproduction, représentation, modification ou diffusion, en tout ou partie,
              sans autorisation préalable, est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Responsabilité</h2>
            <p>
              L'association La Main Tendue s'efforce d'assurer l'exactitude et la mise à jour des
              informations diffusées sur ce site, mais ne peut garantir l'absence d'erreur ou
              d'omission. Elle ne saurait être tenue responsable des dommages directs ou indirects
              résultant de l'accès ou de l'utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Liens externes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers (HelloAsso, Google Maps…).
              L'association La Main Tendue n'exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous
              contacter à l'adresse {SITE.email}.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
