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
              ce site, pourquoi, et comment vous pouvez exercer vos droits, conformément au
              Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Responsable du traitement</h2>
            <p>
              Le responsable des données collectées via ce site est l'association La Main Tendue,
              {" "}{SITE.address}, joignable à l'adresse {SITE.email}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Données collectées</h2>
            <p>
              Ce site ne collecte aucune donnée personnelle à des fins de suivi ou de publicité.
              Aucun outil de mesure d'audience (type Google Analytics) n'est utilisé, et aucune
              donnée n'est vendue ni cédée à des tiers.
            </p>
            <p className="mt-3">
              Le formulaire de contact collecte votre nom, votre adresse e-mail et le contenu de
              votre message. Ces informations sont transmises par e-mail à l'association via un
              prestataire technique d'envoi (Resend), uniquement dans le but de vous répondre.
              Elles ne sont ni stockées sur un serveur, ni conservées au-delà du traitement de
              votre demande, ni utilisées à d'autres fins.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Cookies</h2>
            <p>
              Ce site utilise un unique cookie technique (dépôt local dans votre navigateur), qui
              mémorise votre choix sur le bandeau d'information (accepter / refuser) afin de ne pas
              vous solliciter à chaque visite. Ce cookie est strictement nécessaire au
              fonctionnement du bandeau et ne requiert pas de consentement préalable.
            </p>
            <p className="mt-3">
              Aucun cookie publicitaire, de mesure d'audience ou de traçage n'est déposé. Vous
              pouvez à tout moment revenir sur votre choix via le lien{" "}
              <strong>« Gérer les cookies »</strong> en bas de chaque page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Carte et liens externes</h2>
            <p>
              La page Contact intègre une carte fournie par <strong>OpenStreetMap</strong>, un
              service cartographique indépendant. Le chargement de cette carte entraîne la
              transmission de votre adresse IP à ses serveurs, selon leur propre politique de
              confidentialité.
            </p>
            <p className="mt-3">
              Le site propose également des liens vers des services tiers (HelloAsso pour les
              dons, Google Maps pour l'itinéraire). Ces services ne sont sollicités que si vous
              cliquez volontairement sur ces liens, et disposent de leur propre politique de
              confidentialité, indépendante de la nôtre.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Hébergement et sous-traitants</h2>
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>, société américaine. À ce titre,
              les journaux techniques de connexion (adresse IP, pages visitées) peuvent être
              traités en dehors de l'Union européenne. Vercel encadre ces transferts par des
              clauses contractuelles types approuvées par la Commission européenne, garantissant un
              niveau de protection équivalent au RGPD.
            </p>
            <p className="mt-3">
              L'envoi des messages du formulaire de contact est assuré par{" "}
              <strong>Resend</strong>, prestataire technique agissant uniquement comme
              intermédiaire d'envoi, sans conservation ni exploitation des messages pour son propre
              compte.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Durée de conservation</h2>
            <p>
              Les messages envoyés via le formulaire de contact sont conservés le temps nécessaire
              au traitement de votre demande, puis supprimés. Le site lui-même ne conserve aucune
              base de données de contacts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants sur vos données :</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside">
              <li>Droit d'accès aux données vous concernant</li>
              <li>Droit de rectification en cas d'information inexacte</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer l'un de ces droits, contactez-nous à l'adresse {SITE.email}. Nous nous
              engageons à vous répondre dans un délai maximal d'un mois.
            </p>
            <p className="mt-3">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-terracotta transition-colors"
              >
                CNIL
              </a>{" "}
              (Commission Nationale de l'Informatique et des Libertés).
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
