
 
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
  carte.dataset.id = produit.id;
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
var cartesVisibles = [];
var pageActuelle = 1;
var prodParPage = 20;
 
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
 
  cartesVisibles = toutesLesCartes.slice();
  pageActuelle = 1;
  afficherPage();
}
 
/* ── Afficher la page courante ── */
function afficherPage() {
  var debut = (pageActuelle - 1) * prodParPage;
  var fin = debut + prodParPage;
 
  toutesLesCartes.forEach(function(carte) {
    carte.style.display = 'none';
  });
  cartesVisibles.forEach(function(carte, i) {
    carte.style.display = (i >= debut && i < fin) ? '' : 'none';
  });
 
  majPagination();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
 
/* ── Barre de pagination ── */
function majPagination() {
  var nbPages = Math.ceil(cartesVisibles.length / prodParPage);
  var ancien = document.getElementById('paginationBar');
  if (ancien) ancien.remove();
  if (nbPages <= 1) return;
 
  var mobile = window.innerWidth < 600;
 
  var bar = document.createElement('div');
  bar.id = 'paginationBar';
  bar.style.cssText = 'display:flex;justify-content:center;align-items:center;gap:8px;margin:32px 0 16px;flex-wrap:wrap;';
 
  /* Bouton précédent */
  var prev = document.createElement('button');
  prev.textContent = '←';
  prev.disabled = pageActuelle === 1;
  prev.style.cssText = 'padding:8px 14px;border-radius:20px;border:2px solid #b56edb;background:' + (pageActuelle === 1 ? '#eee' : '#b56edb') + ';color:' + (pageActuelle === 1 ? '#cc5bbb' : '#fff') + ';cursor:' + (pageActuelle === 1 ? 'default' : 'pointer') + ';font-size:16px;';
  prev.onclick = function() { if (pageActuelle > 1) { pageActuelle--; afficherPage(); } };
  bar.appendChild(prev);
 
  if (mobile) {
    /* Mode mobile : juste "Page 2 / 5" */
    var info = document.createElement('span');
    info.style.cssText = 'font-size:15px;color:#4A2060;font-weight:bold;padding:0 8px;';
    info.textContent = 'Page ' + pageActuelle + ' / ' + nbPages;
    bar.appendChild(info);
  } else {
    /* Mode desktop : tous les numéros */
    for (var i = 1; i <= nbPages; i++) {
      (function(num) {
        var btn = document.createElement('button');
        btn.textContent = num;
        var actif = num === pageActuelle;
        btn.style.cssText = 'width:36px;height:36px;border-radius:50%;border:2px solid #b56edb;background:' + (actif ? '#b56edb' : '#fff') + ';color:' + (actif ? '#fff' : '#4A2060') + ';cursor:' + (actif ? 'default' : 'pointer') + ';font-weight:bold;font-size:14px;';
        btn.onclick = function() { pageActuelle = num; afficherPage(); };
        bar.appendChild(btn);
      })(i);
    }
  }
 
  /* Bouton suivant */
  var next = document.createElement('button');
  next.textContent = '→';
  next.disabled = pageActuelle === nbPages;
  next.style.cssText = 'padding:8px 14px;border-radius:20px;border:2px solid #b56edb;background:' + (pageActuelle === nbPages ? '#eee' : '#b56edb') + ';color:' + (pageActuelle === nbPages ? '#aaa' : '#fff') + ';cursor:' + (pageActuelle === nbPages ? 'default' : 'pointer') + ';font-size:16px;';
  next.onclick = function() { if (pageActuelle < nbPages) { pageActuelle++; afficherPage(); } };
  bar.appendChild(next);
 
  /* Compteur sous la barre */
  var compteur = document.createElement('div');
  compteur.style.cssText = 'width:100%;text-align:center;color:#888;font-size:13px;margin-top:4px;';
  compteur.textContent = cartesVisibles.length + ' produit' + (cartesVisibles.length > 1 ? 's' : '') + ' — page ' + pageActuelle + ' / ' + nbPages;
  bar.appendChild(compteur);
 
  var grille = document.getElementById('produitsGrille');
  grille.parentNode.insertBefore(bar, grille.nextSibling);
}
 
/* ── Filtrer par catégorie ── */
function filtrer(mot, btn) {
  document.querySelectorAll('.cat-btn').forEach(function(b) { b.classList.remove('actif'); });
  if (btn) btn.classList.add('actif');
 
  cartesVisibles = toutesLesCartes.filter(function(carte) {
    if (mot === 'tous') return true;
    var cat = (carte.dataset.categorie || '').toLowerCase();
    return cat.includes(mot.toLowerCase());
  });
 
  pageActuelle = 1;
  afficherPage();
}
 
/* ── Trier le catalogue ── */
function trierCatalogue(mode) {
  var grille = document.getElementById('produitsGrille');
  if (!grille) return;
 
  function getPrix(p) {
    if (p.prixUnitaire) return p.prixUnitaire;
    var match = p.prix.replace(',', '.').match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  }
 
  cartesVisibles.sort(function(a, b) {
    var pa = produits.find(function(p) { return p.id === parseInt(a.dataset.id); });
    var pb = produits.find(function(p) { return p.id === parseInt(b.dataset.id); });
    if (!pa || !pb) return 0;
    switch(mode) {
      case 'az':         return pa.nom.localeCompare(pb.nom, 'fr');
      case 'za':         return pb.nom.localeCompare(pa.nom, 'fr');
      case 'prix-asc':   return getPrix(pa) - getPrix(pb);
      case 'prix-desc':  return getPrix(pb) - getPrix(pa);
      case 'stock':      return (pb.stock || 0) - (pa.stock || 0);
      case 'bestseller': return (pb.bestseller ? 1 : 0) - (pa.bestseller ? 1 : 0);
      default: return 0;
    }
  });
 
  cartesVisibles.forEach(function(c) { grille.appendChild(c); });
  pageActuelle = 1;
  afficherPage();
}
 
/* ── Lancement ── */
rendreCatalogue();