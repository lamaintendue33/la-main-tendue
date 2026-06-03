export const SITE = {
  name: "La Main Tendue",
  fullName: "La Main Tendue — Aide alimentaire et vestimentaire solidaire",
  slogan: "Tendre la main, partager l'essentiel",
  quote:
    "Un regard, un sourire, une main tendue suffisent parfois pour redonner le courage de continuer notre chemin dans la vie.",
  address: "31 rue du Bréteil, 33320 Eysines",
  phone: "07 81 24 17 37",
  phoneHref: "tel:+33781241737",
  email: "lamaintendue33@gmail.com",
  emailHref: "mailto:lamaintendue33@gmail.com",
  facebook: "https://www.facebook.com/lamaintendue33",
  blog: "https://lamaintendue33.wordpress.com/",
  helloasso: "https://www.helloasso.com/associations/la-main-tendue-33/collectes/soutenez-notre-action-sociale",
  siret: "—",
  founded: "1992",
  foundedOfficial: "1995",
  registration: "Association loi 1901",
  legal: "Association d'animation et d'entraide de l'Église Protestante Évangélique d'Eysines",
}

/* Horaires de distribution alimentaire */
export const HOURS_DISTRIBUTION = [
  { days: "Mercredi", hours: "11h00 – 12h00" },
  { days: "Mercredi", hours: "13h30 – 17h00" },
]

/* Alias rétro-compat */
export const HOURS_BOUTIQUE = HOURS_DISTRIBUTION

/* Horaires collecte dons */
export const HOURS_DEPOT = [
  { days: "Mercredi", hours: "11h00 – 17h00" },
  { note: "Dépôt sur rendez-vous possible" },
]

export const MISSIONS = [
  {
    num: "01",
    iconKey: "HeartHandshake",
    title: "Nourrir dignement",
    lede: "Aide alimentaire et vestimentaire solidaire",
    description:
      "Chaque semaine, nous distribuons 160 colis alimentaires équilibrés à plus de 500 personnes du bassin eysinais.",
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
      "Une trentaine de bénévoles font vivre l'association. Tri, distribution, collectes — chaque geste compte.",
    tone: "ink",
  },
]

/* Valeurs de l'association */
export const VALUES = [
  {
    key: "RESPECT",
    desc: "Nous accueillons de manière inconditionnelle toute personne quelle que soit son origine sociale, ethnique et ses convictions religieuses.",
  },
  {
    key: "ÉQUITÉ",
    desc: "Nous veillons à ce que chaque famille reçoive équitablement, en fonction des revenus du foyer.",
  },
  {
    key: "PARTAGE",
    desc: "Nous souhaitons faire vivre les valeurs chrétiennes dans la société d'aujourd'hui en nous mettant au service des autres, par amour et avec respect.",
  },
]

/* Timeline historique réelle */
export const TIMELINE = [
  {
    year: "1992",
    title: "Les premières mains tendues",
    desc: "Pierre Lespect, ayant lui-même vécu des temps difficiles, prend contact avec les services sociaux d'Eysines et commence à fournir des colis alimentaires à 8 familles — avec sa vieille AX familiale et son garage.",
  },
  {
    year: "1995",
    title: "Naissance officielle",
    desc: "Création officielle de l'association La Main Tendue. La collaboration avec la Banque Alimentaire de Bordeaux est déjà en place pour s'approvisionner en plus grande quantité.",
  },
  {
    year: "1996",
    title: "Soutien de la Mairie",
    desc: "La Mairie d'Eysines met à disposition un local à Migron, un camion et un chauffeur pour le transport des produits secs depuis la Banque Alimentaire centrale. Ce partenariat est toujours en place aujourd'hui.",
  },
  {
    year: "1998",
    title: "31 rue du Bréteil",
    desc: "Déménagement dans les locaux actuels. À cette époque, environ 30 colis sont préparés chaque semaine. Elisabeth Lespect et Dominique Rouquet rejoignent l'association.",
  },
  {
    year: "2003",
    title: "Agrandissement",
    desc: "L'association grandit et agrandit ses locaux pour faire face à une demande croissante. De nouveaux bénévoles rejoignent l'équipe.",
  },
  {
    year: "2016",
    title: "Nouveaux espaces",
    desc: "Changement de locaux sur le même site du 31 rue du Bréteil pour mieux accueillir les bénéficiaires dans des conditions plus dignes.",
  },
  {
    year: "2021",
    title: "Une équipe soudée",
    desc: "L'association compte une trentaine de bénévoles et est gérée par un conseil d'administration de 5 personnes.",
  },
  {
    year: "2022",
    title: "Solidarité ukrainienne",
    desc: "La Main Tendue ouvre ses portes et tend la main à une cinquantaine de réfugiés ukrainiens.",
  },
  {
    year: "2026",
    title: "Plus de 500 personnes chaque semaine",
    desc: "160 colis alimentaires sont distribués chaque semaine, représentant plus de 500 personnes. Un vestiaire, une ressourcerie et une épicerie de produits d'hygiène complètent l'offre.",
  },
]

/* Partenaires */
export const PARTNERS = [
  {
    name: "Banque Alimentaire de Bordeaux",
    role: "Fournisseur principal — produits secs, fruits, légumes, viande, laitages, produits d'hygiène",
    since: "1992",
  },
  {
    name: "Mairie d'Eysines",
    role: "Mise à disposition d'un camion avec chauffeurs pour transport de denrées",
    since: "1996",
  },
  {
    name: "Leclerc Saint-Médard",
    role: "Collecte des invendus alimentaires une fois par semaine",
    since: "1998",
  },
  {
    name: "Association Adra",
    role: "Partenariat associatif — partage des locaux le jeudi pour leur propre distribution",
    since: "2019",
  },
  {
    name: "Agence du Don en Nature",
    role: "Fournisseur de produits d'hygiène et d'entretien",
    since: "2020",
  },
  {
    name: "Agence Don Solidaire",
    role: "Fournisseur de produits d'hygiène et d'entretien",
    since: "2022",
  },
  {
    name: "Super U Eysines",
    role: "Lieu de la collecte nationale pour la Banque Alimentaire (dernier week-end de novembre)",
    since: "—",
  },
  {
    name: "Le Chaînon Manquant",
    role: "Partenaire d'approvisionnement anti-gaspi — produits frais de proximité",
    since: "2024",
  },
]

export const STATS = [
  { value: 500, unit: "personnes", label: "aidées chaque semaine" },
  { value: 30, unit: "ans", label: "au service des familles" },
  { value: 30, unit: "bénévoles", label: "engagés à nos côtés" },
  { value: 160, unit: "colis", label: "distribués chaque mercredi" },
]

export const DON_STEPS = [
  {
    step: "01",
    title: "Prendre contact",
    desc: "Appelez-nous au 07 81 24 17 37 ou écrivez-nous à lamaintendue33@gmail.com pour connaître nos besoins du moment.",
  },
  {
    step: "02",
    title: "Apporter votre don",
    desc: "Denrées non-périssables, produits d'hygiène, articles bébé : déposez-les au 31 rue du Bréteil le mercredi.",
  },
  {
    step: "03",
    title: "Tri & stockage",
    desc: "Nos bénévoles contrôlent les dates, trient par catégorie et stockent dans nos réserves réfrigérées ou sèches.",
  },
  {
    step: "04",
    title: "Distribution",
    desc: "Chaque mercredi, les bénéficiaires reçoivent leur colis selon la composition de leur foyer et leurs besoins.",
  },
]

/* Items acceptés en don */
export const ITEMS = [
  "Vêtements",
  "Chaussures",
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
  "Fruits & légumes frais",
]

/* Mots-clés du marquee/ticker */
export const TICKER = [
  "Aide alimentaire et vestimentaire",
  "Vêtements & chaussures",
  "Eysines",
  "Depuis 1992",
  "500 personnes aidées",
  "160 colis par semaine",
  "30 bénévoles",
  "Distribution chaque mercredi",
  "Solidarité locale",
  "Association loi 1901",
]
