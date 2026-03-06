/* ═══════════════════════════════════════════
   catalogue_site_emma.js
   Génère automatiquement toutes les vignettes
   depuis produit_site_emme.js + gère les filtres
   ═══════════════════════════════════════════ */

/* ── Badge panier au chargement ── */
(function() {
  var panier = JSON.parse(localStorage.getItem('panier') || '[]');
  var total = panier.reduce(function(acc, item) { return acc + (item.quantite || 1); }, 0);
  var badge = document.getElementById('badgeMenu');
  if (badge) badge.textContent = total;
})();

/* ── Toast ── */
function toastCatalogue(msg) {
  var t = document.getElementById('toastDemo');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2500);
}

/* ── Slideshow au survol ── */
function initSlideshow(carteEl, imgs, pointsCont) {
  var idx = 0;
  var timer = null;

  imgs.forEach(function(_, i) {
    var p = document.createElement('div');
    p.className = 'produit-point' + (i === 0 ? ' actif' : '');
    pointsCont.appendChild(p);
  });

  function goTo(n) {
    imgs[idx].classList.remove('visible');
    pointsCont.children[idx].classList.remove('actif');
    idx = (n + imgs.length) % imgs.length;
    imgs[idx].classList.add('visible');
    pointsCont.children[idx].classList.add('actif');
  }

  carteEl.addEventListener('mouseenter', function() {
    idx = 0;
    timer = setInterval(function() { goTo(idx + 1); }, 900);
  });
  carteEl.addEventListener('mouseleave', function() {
    clearInterval(timer);
    imgs[idx].classList.remove('visible');
    pointsCont.children[idx].classList.remove('actif');
    idx = 0;
    imgs[0].classList.add('visible');
    pointsCont.children[0].classList.add('actif');
  });
}

/* ── Changer quantité +/- ── */
function changerQte(btn, direction, prixUnitaire) {
  var bas = btn.closest('.produit-qte');
  var span = bas.querySelector('span');
  var carte = btn.closest('.produit-carte');
  var prixEl = carte.querySelector('.produit-prix');

  var qte = parseInt(span.textContent) + direction;
  if (qte < 1) qte = 1;
  if (qte > 99) qte = 99;
  span.textContent = qte;

  if (prixUnitaire) {
    var total = (prixUnitaire * qte).toFixed(2).replace('.', ',');
    prixEl.textContent = total + ' €';
  }
}

/* ── Ajout rapide panier ── */
function ajoutRapide(event, produit) {
  event.stopPropagation();

  /* Si le produit a des champs obligatoires → aller sur la fiche */
  if (produit.champs && produit.champs.length > 0) {
    window.location = 'ficheproduit.html?id=' + produit.id;
    return;
  }

  var carte = event.target.closest('.produit-carte');
  var span = carte ? carte.querySelector('.produit-qte span') : null;
  var qte = span ? (parseInt(span.textContent) || 1) : 1;

  var panier = JSON.parse(localStorage.getItem('panier') || '[]');
  panier.push({
    nom: produit.nom,
    prix: parseFloat(produit.prix.replace(',', '.')),
    image: produit.images[0],
    quantite: qte,
    personnalisation: {}
  });
  localStorage.setItem('panier', JSON.stringify(panier));

  var totalQte = panier.reduce(function(acc, item) { return acc + (item.quantite || 1); }, 0);
  var badge = document.getElementById('badgeMenu');
  if (badge) badge.textContent = totalQte;

  toastCatalogue('🛒 ' + qte + ' article' + (qte > 1 ? 's ajoutés' : ' ajouté') + ' au panier !');
}

/* ── Construire une vignette ── */
function creerCarte(produit) {
  var carte = document.createElement('div');
  carte.className = 'produit-carte';
  carte.dataset.categorie = produit.categorie;
  carte.onclick = function() { window.location = 'ficheproduit.html?id=' + produit.id; };

  /* Zone image */
  var wrap = document.createElement('div');
  wrap.className = 'produit-img-wrap';

  produit.images.forEach(function(src, i) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = 'photo ' + (i + 1);
    if (i === 0) img.classList.add('visible');
    wrap.appendChild(img);
  });

  var points = document.createElement('div');
  points.className = 'produit-points';
  wrap.appendChild(points);

  /* Badge bestseller coin haut gauche */
  if (produit.bestseller) {
    var bsBadge = document.createElement('div');
    bsBadge.className = 'produit-bestseller';
    bsBadge.textContent = '🔥 Meilleures ventes';
    wrap.appendChild(bsBadge);
  }

  carte.appendChild(wrap);

  /* Infos */
  var infos = document.createElement('div');
  infos.className = 'produit-infos';

  var cat = document.createElement('div');
  cat.className = 'produit-cat';
  cat.textContent = produit.categorie;

  var nom = document.createElement('div');
  nom.className = 'produit-nom';
  nom.textContent = produit.nom;

  var badge = document.createElement('span');
  badge.className = 'produit-badge';
  badge.textContent = '⏱ ' + produit.delai;

  var prix = document.createElement('div');
  prix.className = 'produit-prix';
  prix.textContent = (produit.prixUnitaire ? 'dès ' : '') + produit.prix + ' €';

  infos.appendChild(cat);
  infos.appendChild(nom);
  infos.appendChild(badge);

  /* Badge stock faible */
  if (produit.stock !== undefined && produit.stock <= 5) {
    var stockBadge = document.createElement('span');
    stockBadge.className = 'produit-stock-faible';
    stockBadge.textContent = produit.stock === 0
      ? '❌ Rupture de stock'
      : '⚠️ Stock faible — reste ' + produit.stock;
    infos.appendChild(stockBadge);
  }

  infos.appendChild(prix);
  carte.appendChild(infos);

  /* Lancer le slideshow */
  var imgs = wrap.querySelectorAll('img');
  if (imgs.length > 1) initSlideshow(carte, Array.from(imgs), points);

  return carte;
}

/* ── Rendre toutes les vignettes ── */
var toutesLesCartes = [];

function rendreCatalogue() {
  var grille = document.getElementById('produitsGrille');
  if (!grille || typeof produits === 'undefined') return;

  grille.innerHTML = '';
  toutesLesCartes = [];

  produits.forEach(function(produit) {
    var carte = creerCarte(produit);
    grille.appendChild(carte);
    toutesLesCartes.push(carte);
  });
}

/* ── Filtrer par catégorie ── */
function filtrer(mot, btn) {
  /* Mettre à jour bouton actif */
  document.querySelectorAll('.cat-btn').forEach(function(b) { b.classList.remove('actif'); });
  if (btn) btn.classList.add('actif');

  toutesLesCartes.forEach(function(carte) {
    if (mot === 'tous') {
      carte.style.display = '';
    } else {
      var cat = (carte.dataset.categorie || '').toLowerCase();
      carte.style.display = cat.includes(mot.toLowerCase()) ? '' : 'none';
    }
  });
}

/* ── Lancement ── */
rendreCatalogue();
