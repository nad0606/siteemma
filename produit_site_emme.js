/* produits.js — base de données de tous les produits */

var produits = [
  {
    id: 1,
    nom: "Marque-page papillon violet",
    categorie: "Papeterie & Jeux",
    prix: "à partir de 6,50",
    prixOptions: { "Sans pendentif": 6.50, "Avec pendentif": 9.00 },
     variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
  "<div style='text-align:center'>✨ <strong>Petit papillon marque page</strong> ✨</div>\n\n" +
  "Envolez-vous dans vos lectures avec notre marque-page papillon violet, un véritable bijou inspiré de la nature.🌟\n" +
  " Ce marque-page unique est bien plus qu'un simple accessoire, c'est une invitation à la rêverie et à la légèreté.\n" +
  "​C'est le cadeau idéal pour les amateurs de livres, les passionnés de nature ou toute personne qui apprécie les objets délicats et raffinés.\n\n" +
  "<strong>Pourquoi craquer pour notre marque-page ?</strong>\n" +
  "• 100% Personnalisable : Personnalisez le avec l'un de nos nombreux pendentifs 🎨\n" +
  "• Fait Main avec Amour : Chaque marque-page est monté avec soin dans mon atelier des Alpes-Maritimes (06). Une création française et artisanale ! \n" +
  "• Un Cadeau pour la Vie : Idéal pour une naissance, un baptême, un anniversaire ou même la fête des mères/pères. C’est le souvenir parfait qui traverse les années. 🎁\n\n" +
  "<strong>📋 Caractéristiques & Conseils</strong>\n" +
  "• Dimensions : 4,5cm de hauteur, 5cm de largeur et 0,5mm d épaisseur.\n" +
  "• Matériaux : ​Magnifiquement conçu en métal doré émaillé, il représente un papillon aux ailes délicates, accompagné d'une petite breloque papillon au bout d'une chaînette et si vous le souhaitez, un pendentif au choix rendant votre commande vraiment unique !).\n" +
  "• Usage : Objet de décoration (ceci n'est pas un jouet, à manipuler avec précaution). ⚠️\n" +
  "• Sur mesure : Une envie particulière ? Choisissez la breloque ou la lettre qui vous représente le plus ! 💌\n\n" +
  "<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n" +
  "Chaque création est une pièce unique réalisée pour vous" +
"</div>",

    images: [
      "imgpapillonviolet1.avif",
      "imgpapillonviolet2.avif",
      "imgpapillonviolet3.avif",
      "imgpapillonviolet4.avif",
      "imgpapillonviolet5.avif",
      "imgpapillonviolet6.avif",
      "imgpapillonviolet7.avif",
      "imgpapillonviolet8.avif"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Sans pendentif" , "Avec pendentif"] }
    ],
    champs: [{ label: "Choix du prendentif", placeholder: "Ex : Sans, lettre M ou numero 12 (voir photos)", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Métal doré émaillé",
    stock: 3
  },
  
    {
    id: 2,
    nom: "Marque-page papillon bleu",
    categorie: "Papeterie & Jeux",
    prix: "à partir de 6,50",
    prixOptions: { "Sans pendentif": 6.50, "Avec pendentif": 9.00 },
     variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
  "<div style='text-align:center'>✨ <strong>Petit papillon marque page</strong> ✨</div>\n\n" +
  "Envolez-vous dans vos lectures avec notre marque-page papillon violet, un véritable bijou inspiré de la nature.🌟\n" +
  " Ce marque-page unique est bien plus qu'un simple accessoire, c'est une invitation à la rêverie et à la légèreté.\n" +
  "​C'est le cadeau idéal pour les amateurs de livres, les passionnés de nature ou toute personne qui apprécie les objets délicats et raffinés.\n\n" +
  "<strong>Pourquoi craquer pour notre marque-page ?</strong>\n" +
  "• 100% Personnalisable : Personnalisez le avec l'un de nos nombreux pendentifs 🎨\n" +
  "• Fait Main avec Amour : Chaque marque-page est monté avec soin dans mon atelier des Alpes-Maritimes (06). Une création française et artisanale ! \n" +
  "• Un Cadeau pour la Vie : Idéal pour une naissance, un baptême, un anniversaire ou même la fête des mères/pères. C’est le souvenir parfait qui traverse les années. 🎁\n\n" +
  "<strong>📋 Caractéristiques & Conseils</strong>\n" +
  "• Dimensions : 4,5cm de hauteur, 5cm de largeur et 0,5mm d épaisseur.\n" +
  "• Matériaux : ​Magnifiquement conçu en métal doré émaillé, il représente un papillon aux ailes délicates, accompagné d'une petite breloque papillon au bout d'une chaînette et si vous le souhaitez, un pendentif au choix rendant votre commande vraiment unique !).\n" +
  "• Usage : Objet de décoration (ceci n'est pas un jouet, à manipuler avec précaution). ⚠️\n" +
  "• Sur mesure : Une envie particulière ? Choisissez la breloque ou la lettre qui vous représente le plus ! 💌\n\n" +
  "<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n" +
  "Chaque création est une pièce unique réalisée pour vous" +
"</div>",

    images: [
     "imgpapillonbleu1.webp",
      "imgpapillonbleu2.webp",
       "imgpapillonbleu3.webp",
        "imgpapillonbleu4.webp",
       "imgpapillonviolet3.avif",
      "imgpapillonviolet4.avif",
      "imgpapillonviolet6.avif",
      "imgpapillonviolet7.avif",
      "imgpapillonviolet8.avif"
      
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Sans pendentif" , "Avec pendentif"] }
    ],
    champs: [{ label: "Choix du prendentif", placeholder: "Ex : Sans, lettre M ou numero 12 (voir photos)", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Métal doré émaillé",
    stock: 6
  },
  
    {
    id: 3,
    nom: "Marque-page papillon vert",
    categorie: "Papeterie & Jeux",
    prix: "à partir de 6,50",
    prixOptions: { "Sans pendentif": 6.50, "Avec pendentif": 9.00 },
     variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
  "<div style='text-align:center'>✨ <strong>Petit papillon marque page</strong> ✨</div>\n\n" +
  "Envolez-vous dans vos lectures avec notre marque-page papillon violet, un véritable bijou inspiré de la nature.🌟\n" +
  " Ce marque-page unique est bien plus qu'un simple accessoire, c'est une invitation à la rêverie et à la légèreté.\n" +
  "​C'est le cadeau idéal pour les amateurs de livres, les passionnés de nature ou toute personne qui apprécie les objets délicats et raffinés.\n\n" +
  "<strong>Pourquoi craquer pour notre marque-page ?</strong>\n" +
  "• 100% Personnalisable : Personnalisez le avec l'un de nos nombreux pendentifs 🎨\n" +
  "• Fait Main avec Amour : Chaque marque-page est monté avec soin dans mon atelier des Alpes-Maritimes (06). Une création française et artisanale ! \n" +
  "• Un Cadeau pour la Vie : Idéal pour une naissance, un baptême, un anniversaire ou même la fête des mères/pères. C’est le souvenir parfait qui traverse les années. 🎁\n\n" +
  "<strong>📋 Caractéristiques & Conseils</strong>\n" +
  "• Dimensions : 4,5cm de hauteur, 5cm de largeur et 0,5mm d épaisseur.\n" +
  "• Matériaux : ​Magnifiquement conçu en métal doré émaillé, il représente un papillon aux ailes délicates, accompagné d'une petite breloque papillon au bout d'une chaînette et si vous le souhaitez, un pendentif au choix rendant votre commande vraiment unique !).\n" +
  "• Usage : Objet de décoration (ceci n'est pas un jouet, à manipuler avec précaution). ⚠️\n" +
  "• Sur mesure : Une envie particulière ? Choisissez la breloque ou la lettre qui vous représente le plus ! 💌\n\n" +
  "<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n" +
  "Chaque création est une pièce unique réalisée pour vous" +
"</div>",

    images: [
     "imgpapillonvert1.webp",
      "imgpapillonvert2.webp",
       "imgpapillonvert3.webp",
       "imgpapillonviolet3.avif",
      "imgpapillonviolet4.avif",
      "imgpapillonviolet6.avif",
      "imgpapillonviolet7.avif",
      "imgpapillonviolet8.avif"
     
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Sans pendentif" , "Avec pendentif"] }
    ],
    champs: [{ label: "Choix du prendentif", placeholder: "Ex : Sans, lettre M ou numero 12 (voir photos)", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Métal doré émaillé",
    stock: 7
  },
    {
    id: 4,
    nom: "Marque-page papillon rose",
    categorie: "Papeterie & Jeux",
    prix: "à partir de 6,50",
    prixOptions: { "Sans pendentif": 6.50, "Avec pendentif": 9.00 },
     variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
  "<div style='text-align:center'>✨ <strong>Petit papillon marque page</strong> ✨</div>\n\n" +
  "Envolez-vous dans vos lectures avec notre marque-page papillon violet, un véritable bijou inspiré de la nature.🌟\n" +
  " Ce marque-page unique est bien plus qu'un simple accessoire, c'est une invitation à la rêverie et à la légèreté.\n" +
  "​C'est le cadeau idéal pour les amateurs de livres, les passionnés de nature ou toute personne qui apprécie les objets délicats et raffinés.\n\n" +
  "<strong>Pourquoi craquer pour notre marque-page ?</strong>\n" +
  "• 100% Personnalisable : Personnalisez le avec l'un de nos nombreux pendentifs 🎨\n" +
  "• Fait Main avec Amour : Chaque marque-page est monté avec soin dans mon atelier des Alpes-Maritimes (06). Une création française et artisanale ! \n" +
  "• Un Cadeau pour la Vie : Idéal pour une naissance, un baptême, un anniversaire ou même la fête des mères/pères. C’est le souvenir parfait qui traverse les années. 🎁\n\n" +
  "<strong>📋 Caractéristiques & Conseils</strong>\n" +
  "• Dimensions : 4,5cm de hauteur, 5cm de largeur et 0,5mm d épaisseur.\n" +
  "• Matériaux : ​Magnifiquement conçu en métal doré émaillé, il représente un papillon aux ailes délicates, accompagné d'une petite breloque papillon au bout d'une chaînette et si vous le souhaitez, un pendentif au choix rendant votre commande vraiment unique !).\n" +
  "• Usage : Objet de décoration (ceci n'est pas un jouet, à manipuler avec précaution). ⚠️\n" +
  "• Sur mesure : Une envie particulière ? Choisissez la breloque ou la lettre qui vous représente le plus ! 💌\n\n" +
  "<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n" +
  "Chaque création est une pièce unique réalisée pour vous" +
"</div>",

    images: [
        "imgpapillonrose1.webp",
        "imgpapillonrose2.webp",
          "imgpapillonrose3.webp",
           "imgpapillonviolet3.avif",
      "imgpapillonviolet4.avif",
      "imgpapillonviolet6.avif",
      "imgpapillonviolet7.avif",
      "imgpapillonviolet8.avif"
      
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Sans pendentif" , "Avec pendentif"] }
    ],
    champs: [{ label: "Choix du prendentif", placeholder: "Ex : Sans, lettre M ou numero 12 (voir photos)", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Métal doré émaillé",
    stock: 6
  },

  {
   
    id: 5,
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
   
    id: 6,
    nom: "Plaque de porte Lion personnalisée",
    categorie: "Chambre Enfant",
    prix: "à partir de 22,00",
    variationPrix: "Taille",
    prixOptions: {"20cm - 6mm": 22,"20cm - 9mm": 26,"30cm - 6mm": 27,"30cm - 9mm": 31},
    description: "<div style='color:#4A2060;'>" + 
  "<div style='text-align:center'>🦁 Plaque de Porte : L'Éveil du Roi Lion dans la Chambre de Bébé ✨</div>\n\n" +
"Apportez une touche de magie et de rugissante tendresse à l'univers de votre enfant avec notre plaque de porte personnalisée Lion. Un classique indémodable, réinterprété en bois de bouleau pour une décoration naturelle et unique. 🌿\n\n"+
"<strong>🎁 Le cadeau idéal pour toutes les occasions :</strong>\n"+
"Que ce soit pour une naissance, un baptême ou un anniversaire, cette plaque est le présent personnalisé qui touche en plein cœur. 💛\n\n"+
"<strong>✨ Un savoir-faire artisanal & Français :</strong>\n"+
"Fait main : Découpe et gravure artisanales réalisées avec passion dans les Alpes-Maritimes (06).\n"+
"Qualité Premium : Conçue en bois de bouleau pour un rendu doux et authentique.\n\n"+
"<strong>📏 Personnalisation sur-mesure : </strong>Choisissez le format qui s'adaptera parfaitement à votre espace :\n"+
"• Largeur au choix : 20 cm ou 30 cm. 📐\n"+
"• Épaisseur au choix : * Option 6mm : Un jeu de relief délicat (3mm au centre / 6mm sur les bords) ou Option 9mm : Un relief plus affirmé et solide (6mm au centre / 9mm sur les bords).\n\n"+
"<strong>🛠️ Installation & Conseils :</strong>\n"+
"• Fixation express : Se pose en un clin d'œil avec du ruban adhésif double face (nous vous conseillons la marque 3M pour une tenue parfaite non fourni).💡\n"+
"• Précautions : Cet objet est une décoration destinée à embellir votre intérieur, ce n'est pas un jouet. À manipuler avec soin et amour. ✨\n"+
"• Le charme de l'unique : Le bois est une matière vivante. Les variations de grain et de teintes rendent chaque création absolument unique, rien que pour vous. 🪵\n"+
 "</div>",
  images: [
    "plion1.webp",
    "plion2.webp",
    "plion3.webp",
    "plion4.webp",
    "plion5.webp",
    "plion6.webp",
    "plion7.webp",
    "plion8.webp",
    "plion9.webp",
    "plion10.webp",
    "plion11.webp",
    "plion12.webp",
    "plion13.webp",
    "plion14.webp",
    "plion15.webp",
    "plion16.webp",
    "plion17.webp"
  ],
    variations: [
      { nom: "Couleur", type: "select", options: ["Rose clair","Rose","Bleu clair","Bleu","Bleu foncé","Rouge","Orange","Jaune","Vert","Vert foncé","Blanc","Noir","Or"] },
      { nom: "Taille", type: "select", options: ["20cm - 6mm","20cm - 9mm","30cm - 6mm","30cm - 9mm"] }
    ],
    champs: [
      { label: "Choix prénom", placeholder: "Ex : Léo", type: "textarea" }
    ],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
     bestseller: true
  },

  {
    id: 7,
    nom: "Insert Trofast IKEA — Pâques & Œufs",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul": 12,"Planche + 6 œufs": 18,"Planche + 9 œufs": 21,"Planche + 12 œufs": 24,"3 œufs": 3,"6 œufs": 6},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
  "<div style='text-align:center'>✨ <strong>Plateau d'Encastrement Montessori</strong> ✨</div>\n\n" +
  "Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier d'apprentissage ludique ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement.\n\n" +
  "✨ Ce que contient votre lot :\n"+
  "• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n"+
  "• 6 Œufs en bois prêts à être manipulés.\n\n" +
  "<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n"+
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n"+
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n"+
"• Jeu Libre : Un support idéal pour trier, remplir et vider à l'infini.\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n"+
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n"+
"<strong>Le saviez-vous ? </strong>\n"+
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut s'amuser à organiser sa propre chasse aux œufs ! 🧺✨\n\n"+
"Une envie particulière ? Une gravure spécifique ? N’hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
  "<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
  "<strong>⚠️ Note de sécurité & Authenticité :</strong>\n"+
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n"+
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨"+
"</div>",
    images: [
      "trofastpaques1.avif",
      "trofastpaques2.avif",
      "trofastpaques3.jpg",
      "trofastpaques4.jpg",
      "trofastpaques5.avif"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 œufs","Planche + 9 œufs","Planche + 12 œufs","3 œufs","6 œufs"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les motifs des oeufs souhaitez sinon se sera aléatoire", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  }
];