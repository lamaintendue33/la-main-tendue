export const SITE = {
  name: "La Main Tendue",
  fullName: "La Main Tendue — Association d'aide alimentaire",
  slogan: "Tendre la main, partager l'essentiel",
  address: "31 rue du Breteil, 33320 Eysines",
  phone: "09 50 47 42 69",
  phoneHref: "tel:+33950474269",
  phoneAlt: "06 87 50 23 11",
  phoneAltHref: "tel:+33687502311",
  email: "contact@lamaintendue33.fr",
  emailHref: "mailto:contact@lamaintendue33.fr",
  facebook: "https://www.facebook.com/lamaintendue33",
  blog: "https://lamaintendue33.wordpress.com/",
  siret: "—",
  founded: "1995",
  registration: "Association loi 1901 — Préfecture de la Gironde",
}

/* Horaires de distribution alimentaire (à confirmer avec l'asso) */
export const HOURS_DISTRIBUTION = [
  { days: "Mardi", hours: "9h00 – 12h00" },
  { days: "Jeudi", hours: "9h00 – 12h00" },
  { days: "Samedi", hours: "9h00 – 12h00" },
  { days: "Dimanche – Lundi", hours: "Fermé" },
]

/* Alias rétro-compat avec l'ancienne base (Footer/components qui utilisent HOURS_BOUTIQUE) */
export const HOURS_BOUTIQUE = HOURS_DISTRIBUTION

/* Horaires collecte dons (denrées, produits hygiène) */
export const HOURS_DEPOT = [
  { days: "Mardi – Samedi", hours: "9h00 – 12h00" },
  { note: "Dépôt sur rendez-vous possible" },
]

export const MISSIONS = [
  {
    num: "01",
    iconKey: "HeartHandshake",
    title: "Nourrir dignement",
    lede: "Aide alimentaire",
    description:
      "Chaque semaine, nous distribuons des colis alimentaires équilibrés à plus de 400 personnes du bassin eysinais.",
    tone: "sage",
  },
  {
    num: "02",
    iconKey: "Users",
    title: "Créer du lien",
    lede: "Accueil & écoute",
    description:
      "Un accueil chaleureux, une oreille attentive. La Main Tendue, c'est aussi un lieu où l'on se parle et où l'on se relève.",
    tone: "terracotta",
  },
  {
    num: "03",
    iconKey: "Sparkles",
    title: "Agir ensemble",
    lede: "Bénévolat & solidarité",
    description:
      "Une quarantaine de bénévoles font vivre l'association. Tri, distribution, collectes — chaque geste compte.",
    tone: "ink",
  },
]

/* Items acceptés en don (alimentaires + hygiène + produits bébé) */
export const ITEMS = [
  "Conserves",
  "Pâtes & riz",
  "Huile",
  "Café & thé",
  "Produits bébé",
  "Hygiène",
  "Lessive",
  "Biscuits",
  "Lait longue conservation",
  "Chocolat",
  "Sucre & farine",
]

export const STATS = [
  { value: 400, unit: "personnes", label: "aidées chaque semaine" },
  { value: 30, unit: "ans", label: "au service des familles" },
  { value: 40, unit: "bénévoles", label: "engagés à nos côtés" },
  { value: 52, unit: "distributions", label: "par an, sans relâche" },
]

export const TIMELINE = [
  {
    year: "1995",
    title: "Naissance de l'association",
    desc: "La Main Tendue est fondée à Eysines par un groupe de bénévoles décidés à lutter contre la précarité alimentaire locale.",
  },
  {
    year: "2002",
    title: "Premiers partenariats",
    desc: "Conventions signées avec la Banque Alimentaire de la Gironde et les enseignes locales pour sécuriser les approvisionnements.",
  },
  {
    year: "2010",
    title: "Nouveaux locaux rue du Breteil",
    desc: "Installation dans les locaux actuels au 31 rue du Breteil, avec un espace de distribution plus digne et mieux adapté.",
  },
  {
    year: "2018",
    title: "200 familles accompagnées",
    desc: "Le nombre de bénéficiaires double en quelques années. Création d'un système de points pour personnaliser chaque colis.",
  },
  {
    year: "2024",
    title: "Près de 400 personnes chaque semaine",
    desc: "L'association franchit un cap et renforce son équipe de bénévoles pour faire face à la hausse des demandes.",
  },
]

export const DON_STEPS = [
  {
    step: "01",
    title: "Prendre contact",
    desc: "Appelez-nous au 09 50 47 42 69 ou écrivez-nous pour connaître nos besoins du moment.",
  },
  {
    step: "02",
    title: "Apporter votre don",
    desc: "Denrées non-périssables, produits d'hygiène, articles bébé : déposez-les au 31 rue du Breteil aux horaires de permanence.",
  },
  {
    step: "03",
    title: "Tri & stockage",
    desc: "Nos bénévoles contrôlent les dates, trient par catégorie et stockent dans nos réserves réfrigérées ou sèches.",
  },
  {
    step: "04",
    title: "Distribution",
    desc: "Chaque semaine, les bénéficiaires composent leur colis selon leurs besoins et la composition de leur famille.",
  },
]

/* Mots-clés du marquee/ticker */
export const TICKER = [
  "Aide alimentaire",
  "Eysines",
  "Depuis 1995",
  "400 personnes aidées",
  "40 bénévoles",
  "Distribution hebdomadaire",
  "Solidarité locale",
  "Dons acceptés",
  "Association loi 1901",
]
