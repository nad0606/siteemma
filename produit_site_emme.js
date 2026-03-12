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
  "Envolez-vous dans vos lectures avec notre marque-page papillon bleu, un véritable bijou inspiré de la nature.🌟\n" +
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
  "Envolez-vous dans vos lectures avec notre marque-page papillon vert, un véritable bijou inspiré de la nature.🌟\n" +
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
  "Envolez-vous dans vos lectures avec notre marque-page papillon rose, un véritable bijou inspiré de la nature.🌟\n" +
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
    stock: 80,
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
    "plion16.webp"
  
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
  "<strong>✨ Ce que contient votre lot :</strong>\n"+
  "• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n"+
  "• 6 Œufs en bois prêts à être manipulés selon votre choix.\n\n" +
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
    stock: 10,
    bestseller: true
  },

   {
    id: 8,
    nom: "Insert Trofast IKEA — Printemps & fleurs",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul": 15,"Planche + 6 fleurs": 21,"Planche + 9 fleurs": 24,"Planche + 12 fleurs": 27,"3 fleurs": 3,"6 fleurs": 6},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
"<div style='text-align:center'>🌸 <strong>Plateau d'Encastrement Montessori — Thème Printemps</strong> 🌸</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable jardin d'apprentissage ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🌿\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 6 Fleurs en bois prêtes à être manipulées. 🌼\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Un support idéal pour insérer les fleurs dans leur pot, trier et manipuler à l'infini. Décorer les fleurs avec des petits coton-tiges de couleurs ou autres picots colorés ! 🌷\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ? </strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut décorer les tiges de fleurs avec des perles colorées ou autres accessoires (non fournis) ! 🌈✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "pfleur1.webp",
      "pfleur2.webp",
      "pfleur3.webp",
      "pfleur4.webp",
      "pfleur5.webp",
      "pfleur6.webp",
      "pfleur7.webp",
      "pfleur8.webp",
      "pfleur9.webp",
      "pfleur10.webp"
     
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 fleurs","Planche + 9 fleurs","Planche + 12 fleurs","3 fleurs","6 fleurs"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les motifs des fleurs souhaitez sinon se sera aléatoire", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    bestseller: true
  },

   {
    id: 9,
    nom: "Insert Trofast IKEA — Garage & voitures",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 4,00",
    prixOptions: {"Planche seul": 14,"Planche + 8 objets":22,"Planche + 16 objets":30,"4 voitures":4,"4 objets mecanicien":4 },
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
"<div style='text-align:center'>🚗 <strong>Plateau d'Encastrement Montessori — Thème Garage</strong> 🔧</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier de mécanique ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🏎️\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 4 Voitures en bois prêtes à garer. 🚙\n" +
"• 4 Outils de mécanicien en bois à manipuler. 🔩\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Un support idéal pour garer les voitures au parking et donner les bons outils au garagiste ! 🅿️🔧\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ? </strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut inventer ses propres histoires de garage et jouer au petit mécanicien ! 🧰✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "pgarage1.webp",
      "pgarage2.webp",
      "pgarage3.webp",
      "pgarage4.webp",
      "pgarage5.webp",
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 8 objets","Planche + 16 objets","4 voitures","4 objets mecanicien"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les motifs des voitures ou objets mécanicien souhaitez sinon se sera aléatoire", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    bestseller: true
  },
  {
    id: 10,
    nom: "Insert Trofast IKEA — Halloween & maison hantée",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":14,"Planche + 6 objets":20,"Planche + 9 objets":23,"Planche + 12 objets":26,"3 objets":3,"6 objets":6},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
"<div style='text-align:center'>🎃 <strong>Plateau d'Encastrement Montessori — Thème Halloween</strong> 👻</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en une véritable maison hantée ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🦇\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 6 Personnages Halloween en bois : fantôme, araignée, épouvantail, chauve-souris, sorcière et citrouille ! 🎃\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Un support idéal pour faire entrer les personnages dans la maison hantée et inventer des histoires effrayantes ! 🏚️✨\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ? </strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut inventer ses propres histoires de maison hantée avec tous ses personnages ! 🕷️✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "pmaison1.webp",
      "pmaison2.webp",
      "pmaison3.webp",
      "pmaison4.webp",
      "pmaison5.webp"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 objets","Planche + 9 objets","Planche + 12 objets","3 objets","6 objets"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les motifs des objets souhaitez sinon se sera aléatoire", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

   {
    id: 11,
    nom: "Insert Trofast IKEA — Hiver, banquise & poissons",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":14,"Planche + 6 poissons":20,"Planche + 9 poissons":23,"3 poissons":3,"6 poissons":6},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
"<div style='text-align:center'>🐧 <strong>Plateau d'Encastrement Montessori — Thème Pôle Nord</strong> 🐟</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable monde polaire ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🧊\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 6 Poissons en bois prêts à être pêchés ! 🎣\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Aidez le pêcheur en lui donnant ses poissons, et remplissez les sapins encastrables avec du riz, de la semoule ou autres petits matériaux (non fournis) ! 🌲❄️\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ? </strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut inventer ses propres aventures polaires avec le pêcheur, les pingouins et les ours ! 🐻‍❄️✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "pbanquise1.avif",
    "pbanquise2.jpg",
    "pbanquise3.jpg",
    "pbanquise4.jpg",
    "pbanquise5.jpg",
    "pbanquise6.jpg",
    "pbanquise7.jpg",
    "pbanquise8.jpg",
    "pbanquise9.jpg",
    "pbanquise10.jpg",
    "pbanquise11.jpg",
    "pbanquise12.jpg",
    "pbanquise13.jpg",
    "pbanquise14.jpg",
    "pbanquise15.avif",
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 poissons","Planche + 9 poissons","3 poissons","6 poissons"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les motifs des poissons souhaitez sinon se sera aléatoire", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

   {
    id: 12,
    nom: "Insert Trofast IKEA — Hiver, noêl, renne & bonhomme de neige",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":15,"Planche + 6 objets":21,"Planche + 12 objets":27,"3 flocons":3,"3 carottes":3},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" + 
"<div style='text-align:center'>🎄 <strong>Plateau d'Encastrement Montessori — Thème Noël</strong> ⛄</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier de Noël ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. ❄️\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 3 Carottes en bois pour nourrir le renne de Noël. 🥕\n" +
"• 3 Flocons de neige en bois pour décorer le bonhomme de neige. ❄️\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Donnez des carottes au renne, des flocons au bonhomme de neige, et décorez la planche avec des pompoms colorés dans les trous (non fournis) ! 🎅🌟\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ? </strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut décorer toute la planche avec des pompoms colorés pour un résultat encore plus festif ! 🎨✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "pnoel1.webp",
    "pnoel2.webp",
    "pnoel3.webp",
    "pnoel4.webp",
    "pnoel5.webp",
    "pnoel6.webp",
    "pnoel7.webp",
    "pnoel8.webp",
    "pnoel9.webp",
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 objets","Planche + 12 objets","3 flocons","3 carottes"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

  {
    id: 13,
    nom: "Insert Trofast IKEA — Printemps & oiseaux",
    categorie: "Insert en bois bac IKEA",
    prix: "20",
    description: "<div style='color:#4A2060;'>" + 
"<div style='text-align:center'>🦉 <strong>Plateau d'Encastrement Montessori — Thème Oiseaux</strong> 🌻</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable refuge pour oiseaux ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🌿\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Donnez à manger aux oiseaux en glissant des tiges colorées, des cure-pipes ou autres accessoires dans les trous (non fournis) ! 🪱🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ? </strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut inventer ses propres histoires et nourrir ses oiseaux préférés avec toutes sortes de matériaux ! 🎨✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "poiseau1.avif",
    "poiseau2.webp",
    "poiseau3.jpg",
    "poiseau4.webp",
    "poiseau5.jpg"
    ],
     variations: [
     
    ],
  
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },
    {
    id: 14,
    nom: "Insert Trofast IKEA — Printemps & papillons",
    categorie: "Insert en bois bac IKEA",
    prix: "20",
    description: "<div style='color:#4A2060;'>" + 
"<div style='text-align:center'>🦋 <strong>Plateau d'Encastrement Montessori — Thème Papillon & Chenille</strong> 🐛</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable jardin enchanté ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🌸\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Colorez le papillon avec des pompoms colorés dans ses trous, et remplissez la chenille avec du riz, de la semoule ou autres petits matériaux (non fournis) ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ? </strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer les couleurs de son papillon à chaque fois pour un résultat toujours unique ! 🦋✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ <strong>Faites-vous plaisir ou gâtez vos proches !</strong> ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "ppapillon1.avif",
    "ppapillon2.webp",
    "ppapillon3.jpg",
    "ppapillon4.jpg"
    ],
     variations: [
     
    ],
  
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    bestseller: true
  },

  {
    id: 15,
    nom: "Insert Trofast IKEA — Printemps, pommes & abeilles",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":12,"Planche + 6 objets":18,"Planche + 12 objets":24,"3 pommes":3,"3 abeilles":3},
    variationPrix: "Choix",
    description:"<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🐝 <strong>Plateau d'Encastrement Montessori — Thème Jardin</strong> 🍎</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable jardin d'apprentissage ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🌿\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 3 Abeilles en bois à glisser dans la ruche. 🐝\n" +
"• 3 Pommes en bois à placer dans l'arbre. 🍎\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Placez les abeilles dans la ruche et les pommes dans l'arbre, et enrichissez l'expérience avec des pompons colorés dans les trous de l'arbre (non fournis) ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer les couleurs de son jardin à chaque fois pour un résultat toujours unique ! 🐝🍎✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "pabeille1.webp",
     "pabeille2.webp",
      "pabeille3.webp",
       "pabeille4.webp"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 objets","Planche + 12 objets","3 abeilles","3 pommes"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    bestseller: true
  },

  {
    id: 16,
    nom: "Insert Trofast IKEA — Saint Valentin & coeurs",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":14,"Planche + 6 coeurs":20,"Planche + 9 coeurs":23,"3 coeurs":3,"6 coeurs":6},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>💝 <strong>Plateau d'Encastrement Montessori — Thème Saint-Valentin</strong> 💌</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier de tendresse ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 💕\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 6 Cœurs en bois à glisser dans la lettre d'amour. 💝\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : Glissez les cœurs dans la lettre de Saint-Valentin, et enrichissez l'expérience en remplissant la lettre et les grands cœurs avec du riz, de la semoule ou d'autres petits matériaux (non fournis) ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer son jeu à chaque fois pour un résultat toujours unique ! 💝✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "pcoeur1.webp",
    "pcoeur2.webp",
    "pcoeur3.webp",
    "pcoeur4.webp",
    "pcoeur5.webp"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 coeurs","Planche + 9 coeurs","3 coeurs","6 coeurs"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },
    {
    id: 17,
    nom: "Insert Trofast IKEA — Pâques, oeufs & lapins",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":12,"Planche + 6 carottes":18,"Planche + 9 carottes":21,"3 carottes":3,"6 carottes":6},
    variationPrix: "Choix",
    description:  "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🐰 <strong>Plateau d'Encastrement Montessori — Thème Pâques</strong> 🥕</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable potager de Pâques ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🌸\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 6 Carottes en bois à offrir au lapin de Pâques. 🥕\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : L'enfant s'amuse à glisser les carottes une par une pour nourrir le lapin de Pâques — un scénario adorable qui stimule l'imaginaire et le jeu symbolique ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer son histoire à chaque fois pour un résultat toujours unique ! 🐰✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "ppaques1.webp",
    "ppaques2.webp",
    "ppaques3.webp",
    "ppaques4.webp"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 carottes","Planche + 9 carottes","3 carottes","6 carottes"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    bestseller:true
  },

   {
    id: 18,
    nom: "Insert Trofast IKEA — Hiver, noêl & père noêl",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 5,00",
    prixOptions: {"Planche seul":15,"Planche + 5 cadeaux":20,"Planche + 10 cadeaux":25,"5 cadeaux":5},
    variationPrix: "Choix",
    description:   "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🎅 <strong>Plateau d'Encastrement Montessori — Thème Traîneau de Noël</strong> 🎁</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier de Noël ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. ❄️\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 5 Cadeaux en bois à glisser dans la hotte du Père Noël. 🎁\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : L'enfant s'amuse à remplir la hotte du Père Noël dans son traîneau, et peut décorer ce dernier grâce aux inserts avec des fleurs, des picots ou autres petits matériaux (non fournis) ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer la magie de Noël à chaque fois pour un résultat toujours unique ! 🎅✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "pperenoel1.webp",
    "pperenoel2.webp",
    "pperenoel3.webp",
    "pperenoel4.webp",
    "pperenoel5.webp",
    "pperenoel6.webp",
    "pperenoel7.webp",
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 5 cadeaux","Planche + 10 cadeaux","5 cadeaux"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les cadeaux souhaitez sinon se sera aléatoire ", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

   {
    id: 19,
    nom: "Insert Trofast IKEA — Couleurs",
    categorie: "Insert en bois bac IKEA",
    prix: "25,00",
    description:    "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🌈 <strong>Plateau d'Encastrement Montessori — Thème Couleurs</strong> 🎨</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier des couleurs ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. ✨\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre : L'enfant apprend les couleurs en s'amusant ! Il peut insérer n'importe quel petit objet de la bonne couleur ou des pompons dans les trous correspondants (non fournis). Un jeu de tri et de reconnaissance des couleurs sans fin ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer ses combinaisons de couleurs à chaque fois pour un résultat toujours unique ! 🌈✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "pcouleur1.webp",
    "pcouleur2.webp",
    "pcouleur3.webp",
    "pcouleur4.webp",
    "pcouleur5.webp",
    "pcouleur6.webp",

    ],
    variations: [
     
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans ", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

  {
    id: 20,
    nom: "Insert Trofast IKEA — Potager, fruits & légumes",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":14,"Planche + 12 objets":22,"Planche + 18 objets":28,"3 fruits et legumes":3,"3 accessoires jardinage":3},
    variationPrix: "Choix",
    description:  "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🌻 <strong>Plateau d'Encastrement Montessori — Thème Le Jardin du Jardinier</strong> 🥕</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable potager éducatif ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🌿\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 6 Fruits & Légumes en bois à replacer au bon endroit. 🍎🥕\n" +
"• 6 Accessoires de jardinier en bois à remettre entre les bonnes mains. 🌱\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre & Éducatif : L'enfant apprend à trier et à classer en remettant chaque élément à sa place — les fruits qui poussent dans les arbres, les fruits et légumes qui poussent dans la terre, et les accessoires entre les mains du jardinier. Un vrai éveil au monde du vivant ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer son jardin à chaque fois pour un résultat toujours unique ! 🌻✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
    "ppotager1.webp",
    "ppotager2.webp",
    "ppotager3.webp",
    "ppotager4.webp",
    "ppotager5.webp",
    "ppotager6.webp"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 12 objets","Planche + 18 objets","3 fruits et legumes","3 accessoires jardinage"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les objets souhaitez sinon se sera aléatoire ", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

   {
    id: 21,
    nom: "Insert Trofast IKEA — Halloween & sorcières",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":14,"Planche + 6 objets":20,"Planche + 12 objets":26,"3 objets chaudron":3,"3 souris":3},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🎃 <strong>Plateau d'Encastrement Montessori — Thème Halloween Sorcière</strong> 🧙‍♀️</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable antre de sorcière ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🦇\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• 3 Ingrédients mystérieux en bois à jeter dans le chaudron de la sorcière. 🧪\n" +
"• 3 Souris en bois à donner au chat d'Halloween. 🐭\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre & Imaginaire : L'enfant s'amuse à préparer la potion magique en remplissant le chaudron de la sorcière, et à nourrir le chat en lui donnant ses souris. Un scénario frissonnant qui stimule l'imaginaire et le jeu symbolique ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer sa potion magique à chaque fois pour un résultat toujours unique ! 🎃✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "psorciere1.webp",
         "psorciere2.webp",
            "psorciere3.webp",
               "psorciere4.webp",
                  "psorciere5.webp",
                     "psorciere6.webp"
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 objets","Planche + 12 objets","3 objets chaudron","3 souris"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans OU vous pouvez m'indiquer les motifs des objets souhaitez sinon se sera aléatoire", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

     {
    id: 22,
    nom: "Insert Trofast IKEA — Printemps & écureuils",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":12,"Planche + 6 glands":15,"Planche + 9 glands":18,"3 glands":3,"6 glands":6},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🐿️ <strong>Plateau d'Encastrement Montessori — Thème Écureuil & Glands</strong> 🍂</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable coin de forêt enchantée ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🍃\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• Des glands en bois à glisser dans la bouche de l'écureuil. 🐿️\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre & Imaginaire : L'enfant s'amuse à nourrir l'écureuil en glissant les glands un par un dans sa bouche — un scénario attendrissant qui stimule l'imaginaire et le jeu symbolique ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer son histoire en forêt à chaque fois pour un résultat toujours unique ! 🐿️✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "pecureuil1.webp",
       "pecureuil2.webp",
        "pecureuil3.webp",
         "pecureuil4.webp"
          
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 glands","Planche + 9 glands","3 glands","6 glands"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans ", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    bestseller:true
  },

  
     {
    id: 23,
    nom: "Insert Trofast IKEA — Hiver, noêl & bonhomme de neige",
    categorie: "Insert en bois bac IKEA",
    prix: "20",
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>⛄ <strong>Plateau d'Encastrement Montessori — Thème Bonhomme de Neige</strong> ❄️</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier d'hiver ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🌨️\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre & Sensoriel : L'enfant s'amuse à remplir le bonhomme de neige avec du riz, de la semoule ou d'autres petits matériaux (non fournis), et peut le décorer en glissant des pompons colorés dans ses trous (non fournis). Un éveil sensoriel et créatif sans fin ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer son bonhomme de neige à chaque fois pour un résultat toujours unique ! ⛄✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "pneige1.webp",
        "pneige2.webp",
          "pneige3.webp"
          
    ],
    variations: [
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans ", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

       {
    id: 24,
    nom: "Insert Trofast IKEA — Hiver, noêl & sapin",
    categorie: "Insert en bois bac IKEA",
    prix: "20",
    description:  "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🎄 <strong>Plateau d'Encastrement Montessori — Thème Sapin de Noël</strong> ⭐</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable atelier de Noël ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. ❄️\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• Un sapin en 3 morceaux amovibles pour multiplier les possibilités de jeu. 🎄\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre & Sensoriel : L'enfant s'amuse à remplir le sapin avec du riz, de la semoule ou d'autres petits matériaux (non fournis), et peut le décorer en glissant des pompons colorés dans ses trous (non fournis). Les 3 morceaux du sapin s'enlèvent pour encore plus de possibilités ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer la décoration de son sapin à chaque fois pour un résultat toujours unique ! 🎄✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "psapin1.webp",
       "psapin2.webp",
        "psapin3.webp",
         "psapin4.webp",
          "psapin5.webp",
           "psapin6.webp",
            "psapin7.webp",
             "psapin8.webp",
              "psapin9.webp",
               "psapin10.webp",
          
    ],
    variations: [
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex : Sans ", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10
  },

  
     {
    id: 25,
    nom: "Insert Trofast IKEA — Pompiers & camion",
    categorie: "Insert en bois bac IKEA",
    prix: "à partir de 3,00",
    prixOptions: {"Planche seul":14,"Planche + 6 objets":20,"Planche + 12 objets":26,"3 gouttes d'eau":3,"3 accessoires camions":3},
    variationPrix: "Choix",
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🚒 <strong>Plateau d'Encastrement Montessori — Thème Pompiers</strong> 🔥</div>\n\n" +
"Transformez vos bacs IKEA Trofast (format 20x30 cm) en un véritable caserne de pompiers ! Ce couvercle pédagogique en bois est l'accessoire indispensable pour allier organisation et émerveillement. 🚨\n\n" +
"<strong>✨ Ce que contient votre lot :</strong>\n" +
"• 1 Insert en bois naturel (épaisseur 3mm), découpé avec précision pour s'adapter à votre petit bac.\n" +
"• Des inserts en forme de gouttes d'eau pour éteindre le feu. 💧\n" +
"• Des accessoires de pompiers à ranger dans le camion. 🪜\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Que vous soyez parent ou professionnel de la petite enfance (Assmat), ce plateau inspiré de la pédagogie Montessori offre une multitude de bienfaits :\n" +
"• Développement ciblé : Boostez la motricité fine, la concentration et la coordination œil-main de votre petit explorateur. 🖐️👀\n" +
"• Jeu Libre & Imaginaire : L'enfant s'amuse à éteindre le feu avec ses gouttes d'eau, range les accessoires des pompiers dans leur camion, et peut même le décorer en glissant des picots colorés dans les trous (non fournis). Une aventure héroïque qui stimule l'imaginaire et le jeu symbolique ! 🎨🌈\n" +
"• Éco-responsable & Durable : Fabriqué en bois naturel, ce jeu est sain, sûr et facile à nettoyer. 🪵🌿\n" +
"• Design Doux : Un style épuré qui s'intègre parfaitement dans une chambre d'enfant ou une salle de jeux.\n\n" +
"<strong>Le saviez-vous ?</strong>\n" +
"Ce couvercle n'est pas qu'un simple puzzle, c'est une invitation à la créativité. Votre enfant peut réinventer ses missions de pompier à chaque fois pour un résultat toujours unique ! 🚒✨\n\n" +
"Une envie particulière ? Une gravure spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce lot contient de petites pièces. Pour la sécurité de vos bouts de chou, le jeu doit toujours se faire sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "ppompier1.webp",
      "ppompier2.webp",
      "ppompier3.webp",
      "ppompier4.webp",
      "ppompier5.webp",
      "ppompier6.webp",
      "ppompier7.webp",
      "ppompier8.webp"
          
    ],
    variations: [
      { nom: "Choix", type: "select", options: ["Planche seul","Planche + 6 objets","Planche + 12 objets","3 gouttes d'eau","3 accessoires camions"] }
   
    ],
     champs: [{ label: "Personnalisation", placeholder: "Ex :  Sans OU vous pouvez m'indiquer les motifs des objets souhaitez sinon se sera aléatoire ", type: "textarea" }],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    bestseller:true
  },

   {
   
    id: 26,
    nom: "Plaque Famille personnalisée",
    categorie: "Décoration famille",
    prix: "à partir de 20,00",
    variationPrix: "Taille",
    prixOptions: {"30cm": 20,"40cm":25},
    description:  "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🪵 <strong>Panneau Famille Personnalisé en Bois</strong> 💛</div>\n\n" +
"Sublimez votre intérieur avec une pièce qui raconte <em>votre</em> histoire. Ce panneau \"FAMILLE\" en bois, gravé avec les prénoms de ceux qui vous sont chers, transforme vos souvenirs en une décoration murale élégante et intemporelle. 🌿✨\n\n" +
"<strong>💛 Ce qui rend cette pièce si spéciale :</strong>\n" +
"Le mot \"FAMILLE\" en lettres capitales modernes se marie harmonieusement avec les prénoms de votre tribu, écrits dans une calligraphie fluide et élégante. Chaque prénom est délicatement relié par un petit cœur 💗 — symbole de votre lien unique.\n\n" +
"<strong>📐 Dimensions au choix :</strong>\n" +
"• Format  — 30cm × 8cm : jusqu'à 5 prénoms\n" +
"• Format  — 40cm × 10cm : jusqu'à 6 prénoms\n" +
"Épaisseur du bois : 3mm. Plus il y a de prénoms, plus l'écriture s'affine — pensez-y pour un rendu optimal ! 🖊️\n\n" +
"<strong>💎 Pourquoi vous allez l'adorer ?</strong>\n" +
"• Totalement Unique : Personnalisez-le avec les prénoms de votre choix — conjoint, enfants, ou même vos animaux ! 🐾\n" +
"• Qualité Artisanale : Bois naturel de haute qualité, finition soignée, aspect chaleureux qui s'adapte à tous les styles (bohème, scandinave, moderne). 🪵\n" +
"• Prêt à installer : Deux points de fixation discrets pour l'accrocher au mur, le poser sur une étagère, ou le fixer avec du scotch double face 3M (non fourni). 🔧\n" +
"• Cadeau mémorable : Pendaison de crémaillère, fête des mères, anniversaire de mariage... ou juste pour se faire plaisir. C'est le genre de cadeau dont on se souvient. 🎁\n\n" +
"<strong>✨ Un savoir-faire 100% Français :</strong>\n" +
"Découpe et gravure faites main dans mon atelier des Alpes-Maritimes (06). Chaque pièce est unique et fabriquée avec amour. 💜\n\n" +
"Une envie particulière ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note :</strong> Cet objet est une décoration, non un jouet. À manipuler avec précaution. 🛡️" +
"</div>",
  images: [
    "pfamille1.webp",
    "pfamille2.webp",
    "pfamille3.webp",
    "pfamille4.webp",
    "pfamille5.webp",
  
  ],
    variations: [
     
      { nom: "Taille", type: "select", options: ["30cm","40cm"] }
    ],
    champs: [
      { label: "Choix prénoms", placeholder: "Ex : Merci de m'indiquez les prénoms souhaités. Les prénoms seront reliés par des cœurs dans l'ordre de votre liste. 5 prénoms maximum pour le 30cm, 6 prénoms pour le 40cm. Merci.", type: "textarea" }
    ],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
     
  },

  {
  id: 27,
  nom: "Lettres de Scrabble en Bois Personnalisées",
  categorie: "Décoration Famille",
  prix: "à partir de 1,00",

  description: "<div style='color:#4A2060;'>" +
    "<div style='text-align:center'>🔡 <strong>Lettres de Scrabble en Bois Personnalisées</strong> 🪵</div>\n\n" +
    "Apportez une touche chaleureuse et ludique à votre intérieur avec nos lettres de Scrabble artisanales en bois. Prénoms d'enfants, mots inspirants, mur de famille unique... les possibilités sont infinies ! ✨\n\n" +
    "<strong>📐 Dimensions disponibles :</strong>\n" +
    "• 3cm — Format mini, parfait pour des compositions détaillées\n" +
    "• 5cm — Le format polyvalent, idéal pour les prénoms\n" +
    "• 10cm — Format affirmé, bel effet décoratif\n" +
    "• 15cm — Format XXL, impact visuel garanti ✨\n" +
    "Épaisseur du bois : 3mm. Légères, robustes et jolies ! 🪵\n\n" +
    "<strong>💎 Pourquoi vous allez les adorer ?</strong>\n" +
    "• 100% Personnalisable : Choisissez vos lettres pour former des noms, des mots inspirants ou des dates importantes. 🎨\n" +
    "• Qualité Artisanale : Gravure précise et finitions soignées pour un rendu haut de gamme. Chaque pièce met en valeur le grain naturel du bois. 🌿\n" +
    "• Installation Facile : Légères et prêtes à être posées ou fixées au mur avec du scotch double face type 3M (non fourni). 🔧\n" +
    "• Cadeau Idéal : Crémaillère, naissance, fête des mères, mariage... c'est le cadeau personnalisé qui fait toujours son effet ! 🎁\n\n" +
    "<strong>🛒 Comment commander ?</strong>\n" +
    "1 — Sélectionnez la quantité totale de lettres souhaitée.\n" +
    "2 — Sélectionnez la taille des lettres.\n" +
    "3 — Dans la section \"Personnalisation\", indiquez les lettres dont vous avez besoin (ex : A, B, C, T...) et/ou les dessins grâce aux numéros visibles sur les photos. 📸\n\n" +
    "<strong>✨ Un savoir-faire 100% Français :</strong>\n" +
    "Découpe et gravure faites main à Villeneuve-Loubet, dans les Alpes-Maritimes (06). Chaque pièce est unique et fabriquée avec amour. 💜\n\n" +
    "Une envie particulière ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
    "<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
    "<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
    "• Cet objet est une décoration, non un jouet. À manipuler avec précaution. 🛡️\n" +
    "• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
    "</div>",
  images: [
"pscrabble1.webp",
"pscrabble2.webp",
"pscrabble3.webp",
"pscrabble4.webp",
"pscrabble5.webp",
"pscrabble6.webp",
"pscrabble7.webp",
"pscrabble8.webp",
"pscrabble9.webp",
"pscrabble10.webp"


  ],
   variations: [
     {
      nom: "Taille",
      type: "select",
      options: ["3cm × 3cm","5cm × 5cm","10cm × 10cm","15cm × 15cm"],
      prixParOption: {
        "3cm × 3cm":   1.00,
        "5cm × 5cm":   1.50,
        "10cm × 10cm": 3.00,
        "15cm × 15cm": 5.00
      },
      affectePrix: true
    },
    { nom: "Nombre de lettres",type: "select", options: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",
                "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30",
                "31","32","33","34","35","36","37","38","39","40","41","42","43","44","45",
                "46","47","48","49","50"],
     affectePrix: true
    },
   
  ],
  champs: [
    {
      label: "Vos lettres & dessins",
      placeholder: "Indiquez les lettres souhaitées selon la quantité choisie. Ex : pour 11 lettres → R O M A I N A M O U R. Si vous souhaitez des dessins, ajoutez leur numéro (visible sur les photos) en les comptant dans le total.",
      type: "textarea"
    }
  ],
  delai: "1 à 5 jours ouvrés",
  materiaux: "Bois de Bouleau",
  stock: 100,
  bestseller:true
},

 {
   
    id: 28,
    nom: "Jeu mémory en bois — Personnalisé",
    categorie: "Papeterie et jeux",
    prix: "3,00",
    prixUnitaire: 3.00,
    variationPrix: "Nombre de paires",
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🧸 <strong>Jeu Memory en Bois Personnalisé — Éveil Bébé</strong> 🌿</div>\n\n" +
"Offrez un premier jeu qui a du sens ! Notre Memory en bois gravé au laser est conçu pour éveiller la mémoire et la curiosité des tout-petits, dans un esprit Montessori et zéro plastique. 💛\n\n" +
"<strong>✨ Caractéristiques du produit :</strong>\n" +
"• Matériau : Bois naturel aux bords lisses, sécurisé pour les petites mains. 🪵\n" +
"• Dimensions : Cartes carrées de 6,5cm × 6,5cm — faciles à attraper et à manipuler.\n" +
"• Motifs gravés au laser : ourson, canard, biberon, bébé, petit pot, fleur... et bien d'autres ! (voir photos 📸)\n" +
"• Contenu : Vous choisissez votre nombre de paires (soit 2 pièces par paire au total).\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"Fini le plastique ! Ce jeu est artisanal, éco-responsable et spécialement pensé pour les tout-petits :\n" +
"• Développement ciblé : Mémoire, concentration et motricité fine dès le plus jeune âge. 🖐️👀\n" +
"• Gravure unique : Chaque pièce est gravée au laser pour un rendu précis et durable. 🔡\n" +
"• Cadeau idéal : Baby Shower, baptême, premier anniversaire... c'est le cadeau original et éducatif qui touche en plein cœur. 🎁\n\n" +
"<strong>🎮 Règles du jeu (rapides) :</strong>\n" +
"1 — Mélangez les cartes et placez-les faces cachées en grille.\n" +
"2 — Le premier joueur retourne deux cartes.\n" +
"3 — Si elles forment une paire : le joueur les garde et rejoue ! ✅\n" +
"4 — Sinon, on les retourne et c'est au joueur suivant.\n" +
"5 — Celui qui a le plus de paires à la fin gagne ! 🏆\n\n" +
"Une envie particulière ? Un motif spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Sécurité avant tout : Ce jeu est conçu pour les tout-petits, toujours sous la surveillance d'un adulte. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
    images: [
      "pmemory1.webp",
       "pmemory2.webp",
        "pmemory3.webp",
         "pmemory4.webp",
          "pmemory5.webp",
           "pmemory6.webp",
            "pmemory7.webp",
             "pmemory8.webp",
              "pmemory9.webp",
    ],
    variations: [
      { nom: "Nombre de paires", type: "select", options: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"] }
    ],
    champs: [
      { label: "Motifs souhaitez pour vos paires", placeholder: "Ex : Indiquer moi le numéro du dessin des paires choisies ( voir photo). ", type: "textarea" }
    ],
    delai : "1 à 5 jours ouvrés",
    materiaux: "Bois",
    stock: 80,
  },
  
 {
   
    id: 29,
    nom: "Panneau photos souvenirs personnalisée",
    categorie: "Naissance et bébé",
    prix: "à partir de 30,00",
    variationPrix: "Choix",
    prixOptions: {"Simple":30,"Avec trou et ruban":33},
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>👶 <strong>Tableau Évolution Mensuelle Bébé — 12 Mois de Souvenirs</strong> 🌙</div>\n\n" +
"Immortalisez la première année de votre bébé dans un tableau aussi beau qu'émouvant. Mois après mois, regardez votre petit grandir sur un seul et même support. Un souvenir précieux pour toute la vie. 💛\n\n" +
"<strong>✨ Caractéristiques du produit :</strong>\n" +
"• Matériau : Bois naturel de haute qualité, découpé au laser pour une finition nette et précise. 🪵\n" +
"• Dimensions : 33cm de hauteur × 23cm de largeur — format arche, doux et moderne.\n" +
"• Format photos : 12 emplacements conçus pour des photos de 5cm × 7cm (1 par mois, de 1 à 12 mois).\n" +
"• Prénom : Découpé en relief dans la couleur de votre choix. 🎨\n" +
"• Option ruban : Ajoutez une encoche en haut avec un ruban coloré pour l'accrocher directement au mur. 🎀\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"• Souvenir unique : Visualisez l'incroyable évolution de votre bébé mois après mois sur un seul support. 📸\n" +
"• 100% Personnalisé : Le prénom de votre enfant gravé en relief, dans la couleur de votre choix. 💎\n" +
"• Design arche : Une forme moderne et douce qui s'intègre parfaitement dans une chambre de bébé ou d'enfant. 🌿\n" +
"• Double affichage : Posez-le sur une commode ou une étagère, ou accrochez-le au mur grâce à l'option ruban. 🔧\n" +
"• Cadeau mémorable : Naissance, baptême, premier anniversaire... c'est le cadeau qui émeut et qui reste. 🎁\n\n" +
"Une envie particulière ? Une couleur spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
  images: [
    "ppanneau1.avif",
    "ppanneau2.avif",
    "ppanneau3.avif",
    "ppanneau4.avif",
    "ppanneau5.avif",
    "ppanneau6.avif",
    "ppanneau7.avif",
    "ppanneau8.webp",
  ],
    variations: [
      { nom: "Couleur", type: "select", options: ["Rose clair","Rose","Bleu clair","Bleu","Bleu foncé","Rouge","Orange","Jaune","Vert","Vert foncé","Blanc","Noir","Or"] },
      { nom: "Choix", type: "select", options: ["Simple","Avec trou et ruban"] }
    ],
    champs: [
      { label: "Choix prénom", placeholder: "Ex : Merci de m'indiquer le prénom choisi.\n Merci de m'indiquer le numéro de la couleur du ruban choisi, si vous avez pris l'option avec le trou et le ruban.", type: "textarea" }
    ],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
    
  },

  {
   
    id: 30,
    nom: "Cadre photo échographie",
    categorie: "Naissance et bébé",
    prix: "25",
    description: "<div style='color:#4A2060;'>" +
"<div style='text-align:center'>🤰 <strong>Cadre Échographie Personnalisé en Bois</strong> 💛</div>\n\n" +
"Immortalisez la première photo de votre bébé dans un cadre aussi unique que ce moment magique. Personnalisé avec la phrase de votre choix et les prénoms des futurs parents, c'est le cadeau parfait pour annoncer une grande nouvelle ou célébrer une naissance. 🌟\n\n" +
"<strong>✨ Caractéristiques du produit :</strong>\n" +
"• Matériau : Bois de tilleul verni, épaisseur 6mm — doux, chaleureux et durable. 🪵\n" +
"• Dimensions : 20cm de côté | Emplacement photo : 5cm × 5,5cm (format échographie standard).\n" +
"• Support inclus : Pied en bois 6mm pour poser le cadre sur une étagère ou une commode.\n" +
"• Personnalisation : Phrase de votre choix (ou parmi les exemples en photo) + prénoms des 2 parents ou nom de famille. 🎨\n" +
"• Insertion facile : Rond en bois calibré à la taille de la photo + 2 encoches pour fermer le cadre sans effort. 📸\n\n" +
"<strong>💡 Pourquoi vous allez l'adorer ?</strong>\n" +
"• Cadeau émouvant : Annonce de grossesse, naissance, baptême, fête des mères, fête des pères, Noël, anniversaire... il convient à toutes les occasions ! 🎁\n" +
"• 100% Personnalisé : Votre message gravé au laser pour un rendu précis et intemporel. 💎\n" +
"• Fait Main en France : Découpe et gravure réalisées à la main dans mon atelier des Alpes-Maritimes (06). 💜\n" +
"• Design épuré : S'intègre parfaitement dans n'importe quelle décoration intérieure.\n\n" +
"Une envie particulière ? Une phrase spécifique ? N'hésitez pas à me contacter pour vos demandes spéciales ! 💌\n\n" +
"<div style='text-align:center'>❤️ Faites-vous plaisir ou gâtez vos proches ! ❤️</div>\n\n" +
"<strong>⚠️ Note de sécurité & Authenticité :</strong>\n" +
"• Cet objet est une décoration, non un jouet. À manipuler avec précaution. 🛡️\n" +
"• Le charme du naturel : Chaque pièce est unique ! Le grain du bois et les nuances peuvent varier légèrement par rapport aux photos, ce qui fait tout le cachet de votre produit. 🪵✨" +
"</div>",
  images: [
   "pecho1.avif",
    "pecho2.avif",
     "pecho3.avif",
      "pecho4.avif",
       "pecho5.avif",
        "pecho6.avif",
         "pecho7.avif",
          "pecho8.avif"
  
  ],
    variations: [
      { nom: "Modèlé", type: "select", options: ["Modèle 1","Modèle 2"]}
    ],
    champs: [
      { label: "Choix prénoms", placeholder: "Ex : Merci de m indiquez la phrase de votre choix pour le coeur (la taille du lettrage dépend de la longueur du texte)\nMerci de m indiquez les prénoms du couple, nom de famille ou la gravure souhaitez sur le pied support.", type: "textarea" }
    ],
    delai: "1 à 5 jours ouvrés",
    materiaux: "Bois de Bouleau",
    stock: 10,
     
  },
];