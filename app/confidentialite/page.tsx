import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et gestion des cookies du site de La Main Tendue, association d'aide alimentaire et vestimentaire solidaire à Eysines.",
}

export default function ConfidentialitePage() {
  return (
    <main className="bg-paper pt-24 sm:pt-28 md:pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-[11px] tracking-[0.3em] uppercase text-terracotta font-semibold mb-3">
          Vie privée
        </div>
        <h1 className="font-display font-medium text-4xl md:text-5xl text-ink mb-10">
          Politique de confidentialité
        </h1>

        <div className="space-y-10 text-[14px] text-ink-soft leading-relaxed">
          <section>
            <p>
              L'association La Main Tendue attache une grande importance à la protection de vos
              données personnelles. Cette page explique quelles informations sont collectées sur
              ce site et comment elles sont utilisées, conformément au Règlement Général sur la
              Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Données collectées</h2>
            <p>
              Ce site ne collecte aucune donnée personnelle à des fins de suivi ou de publicité.
              Aucun outil de mesure d'audience (type Google Analytics) n'est utilisé.
            </p>
            <p className="mt-3">
              Les seules données transmises volontairement par les visiteurs sont celles saisies
              dans le formulaire de contact (nom, e-mail, message), utilisées uniquement pour vous
              répondre. Ces données ne sont ni vendues, ni transmises à des tiers, ni conservées
              au-delà du temps nécessaire au traitement de votre demande.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Cookies</h2>
            <p>
              Ce site utilise un unique cookie technique, déposé après votre choix sur le bandeau
              d'information (accepter / refuser). Il sert uniquement à mémoriser votre préférence
              afin de ne pas vous solliciter à chaque visite. Aucun cookie publicitaire ou de
              traçage n'est utilisé.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Liens vers des services tiers</h2>
            <p>
              Le site propose des liens vers des services externes (HelloAsso pour les dons,
              Google Maps pour l'itinéraire). Ces services disposent de leur propre politique de
              confidentialité, indépendante de la nôtre.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
              suppression des données vous concernant. Pour exercer ce droit, contactez-nous à
              l'adresse {SITE.email}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité, écrivez-nous à
              {" "}{SITE.email} ou par courrier à l'adresse : {SITE.address}.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
