/* produits.js — base de données de tous les produits */

var produits = [
  {
    id: 1,
    nom: "Marque-page papillon violet",
    categorie: "Papeterie & Jeux",
    prix: "6,50",
    description: "Envolez-vous dans vos lectures avec ce marque-page papillon violet, un véritable bijou inspiré de la nature. Magnifiquement conçu en métal doré émaillé, il représente un papillon aux ailes délicatement rosées, accompagné d'une petite breloque papillon au bout d'une chaînette. Dimensions : 4,5cm x 5cm x 0,5mm.",
    images: [
      "https://i.etsystatic.com/50081081/r/il/493a7d/7214498919/il_fullxfull.7214498919_6wsr.jpg",
      "https://i.etsystatic.com/50081081/r/il/b7ff83/7166512606/il_fullxfull.7166512606_nmqa.jpg",
      "https://i.etsystatic.com/50081081/r/il/6b832b/7574468250/il_fullxfull.7574468250_nnyp.jpg",
      "https://i.etsystatic.com/50081081/r/il/85eb91/7574468248/il_fullxfull.7574468248_dk5e.jpg",
      "https://i.etsystatic.com/50081081/r/il/ae83f0/7166512602/il_fullxfull.7166512602_lju8.jpg"
    ],
    variations: [
      { nom: "Pendentif", type: "select", options: ["Sans pendentif", "Avec pendentif"] }
    ],
    champs: [{ label: "Prénom à graver", placeholder: "Ex : Léo", type: "textarea" }],
    delai: "2 à 4 jours ouvrés",
    materiaux: "Métal doré émaillé",
    stock: 10
  },
  
  
  {
   
    id: 2,
    nom: "Cubes en bois personnalisés — Prénom et motifs",
    categorie: "Chambre Enfant",
    prix: "2,00",
    prixUnitaire: 2.00,
    variationPrix: "Nombre de cubes",
    description: "<div style='color:#4A2060;'>" + 
  "<div style='text-align:center'>✨ <strong>Les Petits Cubes Personnalisés : Un Souvenir Unique</strong> ✨</div>\n\n" +
  "Offrez un cadeau qui a du sens avec nos cubes en bois artisanaux. Que ce soit pour célébrer une naissance, décorer la chambre d'un enfant ou marquer un événement spécial, ces petits blocs apportent une touche de douceur et d'authenticité à votre intérieur. 🧸🌟\n\n" +
  "<strong>Pourquoi craquer pour nos cubes ?</strong>\n" +
  "• 100% Personnalisable : Composez le prénom de votre choix, une date importante ou choisissez parmi nos nombreux motifs (petits pieds, cœurs, étoiles...). 🎨\n" +
  "• Fait Main avec Amour : Chaque cube est gravé avec soin dans mon atelier des Alpes-Maritimes (06). Une création française et artisanale ! \n" +
  "• Un Cadeau pour la Vie : Idéal pour une naissance, un baptême, un anniversaire ou même la fête des mères/pères. C’est le souvenir parfait qui traverse les années. 🎁\n" +
  "• Matériau : Fabriqués en bois naturel, nos cubes de 3 cm x 3 cm présentent un veinage unique qui fait de chaque pièce un objet d'exception. 🌿\n\n" +
  "<strong>📋 Caractéristiques & Conseils</strong>\n" +
  "• Dimensions : Cubes de 3 cm de côté.\n" +
  "• Matériaux : Bois naturel (le grain peut varier, rendant votre commande vraiment unique !).\n" +
  "• Usage : Objet de décoration (ceci n'est pas un jouet, à manipuler avec précaution). ⚠️\n" +
  "• Sur mesure : Une envie particulière ? Une gravure spécifique ? N’hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
  "<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n" +
  "Chaque création est une pièce unique réalisée pour vous. Les légères variations de bois garantissent le caractère authentique de votre achat." +
"</div>",
    images: [
      "pcube1.webp",
      "pcube2.webp",
      "pcube3.webp",
      "pcube4.webp",
      "pcube5.webp",
      "pcube6.webp",
      "pcube7.webp",
      "pcube8.webp",
      "pcube9.webp",
      "pcube10.webp",
      "pcube11.webp",
      "pcube12.webp",
      "pcube13.webp",
      "pcube14.webp",
      "pcube15.webp"
    ],
    variations: [
      { nom: "Nombre de cubes", type: "select", options: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"] }
    ],
    champs: [
      { label: "Prénom(s) ou lettres souhaitées\n\n Pour chaque cube, indiquez moi la lettre et le choix :\n💎 cube avec remplissage\n💎 cube sans remplissage\n Si motif, indiquez moi le dessin désirez grâce aux numéros.\n(Voir photos)", placeholder: "Ex : EMMA, E avec remplissage, M sans remplissage, M avec remplissage, E sans remplissage, cube motifs numéro 6 ", type: "textarea" }
    ],
    delai : "1 à 5 jours ouvrés",
    materiaux: "Bois",
    stock: 4,
    bestseller: true
  },
  
  
  {
   
    id: 3,
    nom: "Plaque de porte Simba Lion personnalisée",
    categorie: "Chambre Enfant",
    prix: "22,00",
    description: "Plaque de porte Simba prénom bébé personnalisée en bois de tilleul, décoration Le Roi Lion. Découpe et gravure faites main en France, Alpes-Maritimes. Disponible en 2 largeurs (20cm ou 30cm) et 2 épaisseurs (6mm ou 9mm). Se fixe facilement avec du scotch double face 3M.",
    images: [
      "https://i.etsystatic.com/50081081/r/il/c383df/7515231559/il_fullxfull.7515231559_f5cv.jpg",
      "https://i.etsystatic.com/50081081/r/il/f81cb5/7418603264/il_fullxfull.7418603264_1iet.jpg",
      "https://i.etsystatic.com/50081081/r/il/df8e9d/7711856947/il_fullxfull.7711856947_qnpw.jpg",
      "https://i.etsystatic.com/50081081/r/il/816255/7467301314/il_fullxfull.7467301314_6x7j.jpg",
      "https://i.etsystatic.com/50081081/r/il/049dd3/6103174285/il_fullxfull.6103174285_c18q.jpg"
    ],
    variations: [
      { nom: "Couleur", type: "select", options: ["Rose clair","Rose","Bleu clair","Bleu","Bleu foncé","Rouge","Orange","Jaune","Vert","Vert foncé","Blanc","Noir","Or"] },
      { nom: "Taille", type: "select", options: ["20cm - 6mm","20cm - 9mm","30cm - 6mm","30cm - 9mm"] }
    ],
    champs: [
      { label: "Prénom à graver", placeholder: "Ex : Léo", type: "textarea" }
    ],
    delai: "2 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 8,
     bestseller: true
  },
  {
    id: 4,
    nom: "Insert Trofast IKEA — Pâques & Œufs",
    categorie: "Insert en bois bac IKEA",
    prix: "3,00",
    description: "Transformez votre bac Trofast IKEA en atelier de jeu Montessori ! Insert éducatif en bois 3mm, thème Pâques avec œufs. Compatible petit bac IKEA 20cm×30cm. Favorise la motricité fine, la concentration et la coordination. Fabriqué en bois naturel, durable et sûr pour les enfants.",
    images: [
      "https://i.etsystatic.com/50081081/r/il/43ea35/7169264256/il_fullxfull.7169264256_bofj.jpg",
      "https://i.etsystatic.com/50081081/r/il/64651a/7169264250/il_fullxfull.7169264250_b3qc.jpg",
      "https://i.etsystatic.com/50081081/r/il/929676/7169264252/il_fullxfull.7169264252_dv4z.jpg",
      "https://i.etsystatic.com/50081081/r/il/cb3170/7169264254/il_fullxfull.7169264254_lrlz.jpg",
      "https://i.etsystatic.com/50081081/r/il/14983c/7217251097/il_fullxfull.7217251097_fm9m.jpg"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 œufs","Planche + 9 œufs","Planche + 12 œufs","3 œufs","6 œufs"] }
    ],
    champs: [{ label: "Prénom à graver", placeholder: "Ex : Léo", type: "textarea" }],
    delai: "2 à 4 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 3
  }
];