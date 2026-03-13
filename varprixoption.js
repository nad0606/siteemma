/* ── Récupérer l'id du produit dans l'URL ── */
var params = new URLSearchParams(window.location.search);
var id = parseInt(params.get('id'));
var produit = produits.find(function(p) { return p.id === id; });
 
/* ── Toast ── */
function toastFiche(msg) {
  var t = document.getElementById('toastFiche');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2800);
}
 
/* ── Navigation images ── */
var indexImg = 0;
 
function changerImg(src, el) {
  var img = document.getElementById('imgPrincipale');
  img.classList.add('fondu');
  setTimeout(function() {
    img.src = src;
    img.classList.remove('fondu');
  }, 300);
  document.querySelectorAll('.fiche-thumb').forEach(function(t) { t.classList.remove('actif'); });
  el.classList.add('actif');
}
 
function naviguerImg(direction) {
  if (!produit) return;
  indexImg = (indexImg + direction + produit.images.length) % produit.images.length;
  var src = produit.images[indexImg];
  var thumbs = document.querySelectorAll('.fiche-thumb');
  var img = document.getElementById('imgPrincipale');
  img.classList.add('fondu');
  setTimeout(function() { img.src = src; img.classList.remove('fondu'); }, 300);
  thumbs.forEach(function(t) { t.classList.remove('actif'); });
  if (thumbs[indexImg]) thumbs[indexImg].classList.add('actif');
}
 
/* ── Sélecteur couleur visuel ── */
function choisirCouleur(el) {
  var grille = el.closest('.couleur-grille');
  grille.querySelectorAll('.couleur-option').forEach(function(o) { o.classList.remove('actif'); });
  el.classList.add('actif');
  var valeur = el.dataset.valeur;
  var select = grille.nextElementSibling;
  if (select) select.value = valeur;
  var nom = grille.dataset.nom;
  var label = document.querySelector('.couleur-label-valeur[data-nom="' + nom + '"]');
  if (label) label.textContent = valeur;
}
 
/* ── Mise à jour prix simple ── */
function majPrix(valeur) {
  if (!produit) return;
  var total;
  if (produit.prixOptions && produit.prixOptions[valeur] !== undefined) {
    total = produit.prixOptions[valeur].toFixed(2).replace('.', ',');
  } else if (produit.prixUnitaire) {
    var qte = parseInt(valeur) || 1;
    total = (produit.prixUnitaire * qte).toFixed(2).replace('.', ',');
  } else return;
  document.getElementById('fichePrixAffiche').textContent = total + ' €';
}
 
/* ── Mise à jour prix multi-critères ── */
function majPrixMulti() {
  if (!produit) return;
  var totalPrix = 0;
  var nombreMulti = 1;
  var aPrixParOption = false;
 
  produit.variations.forEach(function(v) {
    if (!v.affectePrix) return;
    var sel = document.querySelector('.fiche-select[data-nom="' + v.nom + '"]');
    if (!sel) return;
    if (v.prixParOption) {
      totalPrix += v.prixParOption[sel.value] || 0;
      aPrixParOption = true;
    } else {
      nombreMulti = parseInt(sel.value) || 1;
    }
  });
 
  if (aPrixParOption) {
    var total = (totalPrix * nombreMulti).toFixed(2).replace('.', ',');
    document.getElementById('fichePrixAffiche').textContent = total + ' €';
  }
}

 
/* ── Ajouter au panier ── */
function ajouterAuPanier() {
  /* Vérifier champs obligatoires */
  var champsVides = [];
  document.querySelectorAll('.fiche-input, .fiche-textarea').forEach(function(i) {
    if (!i.value.trim()) {
      champsVides.push(i);
      i.style.border = '2px solid red';
    } else {
      i.style.border = '';
    }
  });
  if (champsVides.length > 0) {
    toastFiche('⚠️ Merci de remplir les champs obligatoires (*)');
    champsVides[0].focus();
    return;
  }
  if (!produit) return;
 
  /* Récupérer les variations et champs */
  var perso = {};
  document.querySelectorAll('.fiche-select').forEach(function(s) {
    perso[s.dataset.nom] = s.value;
  });
  document.querySelectorAll('.fiche-input, .fiche-textarea').forEach(function(i) {
    perso[i.dataset.nom] = i.value;
  });
 
  /* Calculer prix final et quantité */
  var quantite = 1;
  var prixFinal = parseFloat(produit.prix.replace(',', '.'));
 
   if (hasMultiPrix) {
    var totalPrixMulti = 0;
    produit.variations.forEach(function(v) {
      if (!v.affectePrix) return;
      var sel = document.querySelector('.fiche-select[data-nom="' + v.nom + '"]');
      if (!sel) return;
      if (v.prixParOption) {
        totalPrixMulti += v.prixParOption[sel.value] || 0;
      } else {
        quantite = parseInt(sel.value) || 1;
      }
    });
    prixFinal = totalPrixMulti;
  } else if (produit.prixUnitaire && produit.variationPrix) {
    var selectQte = document.querySelector('.fiche-select[data-nom="' + produit.variationPrix + '"]');
    if (selectQte) {
      quantite = parseInt(selectQte.value) || 1;
      prixFinal = produit.prixUnitaire;
    }
  } else if (produit.prixOptions && produit.variationPrix) {
    var selectOpt = document.querySelector('.fiche-select[data-nom="' + produit.variationPrix + '"]');
    if (selectOpt) prixFinal = produit.prixOptions[selectOpt.value] || prixFinal;
  }
 
  /* Vérification stock */
  if (produit.stock !== undefined) {
    if (produit.stock === 0) {
      toastFiche('❌ Ce produit est en rupture de stock.');
      return;
    }
    var panier = JSON.parse(localStorage.getItem('panier') || '[]');
    var dejaAuPanier = panier.reduce(function(total, art) {
      return art.nom === produit.nom ? total + art.quantite : total;
    }, 0);
    if (dejaAuPanier + quantite > produit.stock) {
      var restant = produit.stock - dejaAuPanier;
      if (restant <= 0) {
        toastFiche('❌ Stock épuisé — tu as déjà ' + dejaAuPanier + ' dans ton panier.');
      } else {
        toastFiche('⚠️ Stock insuffisant — il ne reste que ' + restant + ' disponible' + (restant > 1 ? 's' : '') + '.');
      }
      return;
    }
  }
 
  /* Ajouter au panier */
  var panier = JSON.parse(localStorage.getItem('panier') || '[]');
  panier.push({
    nom: produit.nom,
    prix: prixFinal,
    image: produit.images[0],
    quantite: quantite,
    personnalisation: perso
  });
  localStorage.setItem('panier', JSON.stringify(panier));
  toastFiche('🛒 Ajouté au panier !');
  setTimeout(function() { ouvrirMiniPanier(); }, 600);
}
 
/* ── Construire la fiche produit ── */
if (produit) {
  document.title = produit.nom + ' — Les Créations Emma 06';
 
  var thumbsHtml = produit.images.map(function(img, i) {
    return '<img src="' + img + '" class="fiche-thumb' + (i === 0 ? ' actif' : '') + '" onclick="changerImg(\'' + img + '\', this)" alt="photo ' + (i + 1) + '">';
  }).join('');
 
  var couleursCSS = {
    'Rose clair':          '#F2D0F1',
    'Rose':                '#F0417A',
    'Bleu clair':          '#8BBfd4',
    'Bleu':                '#4A90D9',
    'Bleu foncé':          '#1B3A80',
    'Rouge':               '#E83232',
    'Orange':              '#F9663D',
    'Jaune':               '#F5F064',
    'Vert':                '#D7F2AA',
    'Vert foncé':          '#2D6A2D',
    'Blanc':               '#FFFFFF',
    'Noir':                '#1A1A1A',
    'Or':                  '#C8952A',
    'Sans':                '#fff',
    'Ruban 1 — Rouge':     '#CC1111',
    'Ruban 2 — Rose fuchsia': '#F0417A',
    'Ruban 3 — Orange':    '#F9663D',
    'Ruban 4 — Rose poudré': '#F2D0C0',
    'Ruban 5 — Jaune':     '#F5F064',
    'Ruban 6 — Vert anis': '#AAEE44',
    'Ruban 7 — Vert':      '#22AA44',
    'Ruban 8 — Turquoise': '#44CCCC',
    'Ruban 9 — Bleu roi':  '#1155CC',
    'Ruban 10 — Violet':   '#7722AA',
    'Pompon Rouge':        '#CC2222',
    'Pompon Orange':       '#E8621A',
    'Pompon Jaune':        '#D4A017',
    'Pompon Marron clair': '#a3622a',
    'Pompon Marron':       '#7B4A1E',
    'Pompon Marron foncé': '#4a2b10',
    'Pompon Crème':        '#F5F0E0',
    'Pompon Vert sauge':   '#8FAF85',
    'Pompon Vert':         '#1E8A3C',
    'Pompon Vert foncé':   '#0d411c',
    'Pompon Bleu ciel':    '#89C4E1',
    'Pompon Bleu roi':     '#2255CC',
    'Pompon Bleu foncé':   '#1A2A6C',
    'Pompon Rose poudré':  '#F2C4CE',
    'Pompon Rose fuchsia': '#E8336A',
    'Pompon Rose - rouge': '#9e4a63',
    'Pompon Bordeaux':     '#7A1530',
    'Pompon Noir':         '#1A1A1A',
    'Pompon Argent':       '#C0C0C0',
  };
 
  var hasMultiPrix = produit.variations && produit.variations.some(function(v) { return v.affectePrix; });
 
  var variationsHtml = produit.variations.map(function(v) {
    var isPrix = produit.variationPrix && v.nom === produit.variationPrix;
    var onchange = '';
    if (hasMultiPrix && v.affectePrix) {
      onchange = ' onchange="majPrixMulti()"';
    } else if (isPrix) {
      onchange = ' onchange="majPrix(this.value)"';
    }
 
    /* ── Sélecteur couleur visuel ── */
    var estVariationCouleur = v.options.some(function(o) { return couleursCSS[o] !== undefined; });
    if (estVariationCouleur) {
      var ronds = v.options.map(function(o, i) {
        var css = couleursCSS[o] || '#ccc';
        var estBlanc = o === 'Blanc';
         var estSans  = o === 'Sans';
        var styleExtra = estBlanc ? 'border:2px solid #ddd;' : '';
        var contenu = estSans
          ? '<svg viewBox="0 0 36 36" style="position:absolute;top:0;left:0;width:100%;height:100%"><line x1="4" y1="32" x2="32" y2="4" stroke="#cc2222" stroke-width="3" stroke-linecap="round"/></svg><span class="couleur-check">✓</span>'
           : '<span class="couleur-check">✓</span>';
        return '<div class="couleur-option' + (i === 0 ? ' actif' : '') + '" ' +
          'data-valeur="' + o + '" ' +
          'title="' + o + '" ' +
          'onclick="choisirCouleur(this)" ' +
          'style="background:' + css + ';' + (estBlanc ? 'border:2px solid #ddd;' : '') + '">' +
              contenu +
          '</div>';
      }).join('');
      return '<div class="fiche-section-titre">' + v.nom + ' : <span class="couleur-label-valeur" data-nom="' + v.nom + '">' + v.options[0] + '</span></div>' +
        '<div class="couleur-grille" data-nom="' + v.nom + '">' + ronds + '</div>' +
        '<select class="fiche-select" data-nom="' + v.nom + '" style="display:none">' +
        v.options.map(function(o) { return '<option value="' + o + '">' + o + '</option>'; }).join('') +
        '</select>';
    }
 
    /* ── Select classique ── */
    return '<div class="fiche-section-titre">' + v.nom + '</div>' +
      '<select class="fiche-select" data-nom="' + v.nom + '"' + onchange + '>' +
      v.options.map(function(o) {
        var label = o;
        if (isPrix && produit.prixUnitaire) {
          var qte = parseInt(o) || 1;
          var total = (produit.prixUnitaire * qte).toFixed(2).replace('.', ',');
          label = o + ' — ' + total + ' €';
        } else if (isPrix && produit.prixOptions && produit.prixOptions[o] !== undefined) {
          label = o + ' — ' + produit.prixOptions[o].toFixed(2).replace('.', ',') + ' €';
        } else if (v.affectePrix && v.prixParOption && v.prixParOption[o] !== undefined) {
          label = o + ' — ' + v.prixParOption[o].toFixed(2).replace('.', ',') + ' € / unité';
        } else if (v.affectePrix && !v.prixParOption) {
          label = o + ' lettre' + (parseInt(o) > 1 ? 's' : '');
        }
        return '<option value="' + o + '">' + label + '</option>';
      }).join('') +
      '</select>';
  }).join('');
 
  var champsHtml = produit.champs.map(function(c) {
    return '<div class="fiche-section-titre">✏️ ' + c.label.replace(/\n/g, '<br>') + '</div>' +
      (c.type === 'textarea'
        ? '<textarea class="fiche-textarea" data-nom="' + c.label + '" placeholder="' + c.placeholder + '" rows="3"></textarea>'
        : '<input class="fiche-input" data-nom="' + c.label + '" type="text" placeholder="' + c.placeholder + '">');
  }).join('');
 
  document.getElementById('ficheProduit').innerHTML =
    '<div class="fiche-galerie">' +
      '<div class="fiche-img-wrapper">' +
        '<button class="fiche-fleche gauche" onclick="naviguerImg(-1)">&#8592;</button>' +
        '<img id="imgPrincipale" class="fiche-img-principale" src="' + produit.images[0] + '" alt="' + produit.nom + '" onclick="ouvrirLightbox(this.src)">' +
        '<button class="fiche-fleche droite" onclick="naviguerImg(1)">&#8594;</button>' +
        '<div class="fiche-badge-zoom">🔍 Cliquer pour zoomer</div>' +
        '<div class="fiche-thumbnails">' + thumbsHtml + '</div>' +
      '</div>' +
    '</div>' +
    '<div>' +
      '<div class="fiche-cat">' + produit.categorie + '</div>' +
      '<div class="fiche-nom">' + produit.nom + '</div>' +
      '<div class="fiche-prix" id="fichePrixAffiche">' + produit.prix + ' €</div>' +
      '<div class="fiche-tva">TVA non applicable — Art. 293B du CGI</div>' +
      '<div class="fiche-delai">⏱ Délai de fabrication : ' + produit.delai + '</div>' +
      '<div class="fiche-materiaux">🌿 Matériaux : ' + produit.materiaux + '</div>' +
      variationsHtml +
      (produit.stock !== undefined && produit.stock <= 5
        ? '<div class="fiche-stock-faible">' + (produit.stock === 0
            ? '❌ Rupture de stock'
            : '⚠️ Plus que ' + produit.stock + ' disponible' + (produit.stock > 1 ? 's' : ''))
          + '</div>'
        : '') +
      champsHtml +
      '<button class="fiche-btn-panier" onclick="ajouterAuPanier()">🛒 Ajouter au panier 🛒</button>' +
    '</div>' +
    '<div class="fiche-desc">' +
      '<div class="fiche-desc-titre">📋 Description</div>' +
      '<p>' + produit.description.replace(/\n/g, '<br>') + '</p>' +
    '</div>';
 
} else {
  document.getElementById('ficheProduit').innerHTML = '<p style="text-align:center;font-family:Pacifico,cursive;color:#E365C1;padding:40px">Produit introuvable 😕</p>';
}
 
function filtrer(mot) {
  window.location = 'catalogueemma.html?filtre=' + encodeURIComponent(mot);
}
 