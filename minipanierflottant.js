function getPanier()      { return JSON.parse(localStorage.getItem('panier') || '[]'); }
function savePanier(p)    { localStorage.setItem('panier', JSON.stringify(p)); }
function fmt(n)           { return n.toFixed(2).replace('.', ',') + ' €'; }

function toastMini(msg) {
  var t = document.getElementById('toastMini');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2800);
}

/* --- Ouvrir / Fermer --- */
function ouvrirMiniPanier() {
  rendreMiniPanier();
  document.getElementById('minipanierDrawer').classList.add('ouvert');
  document.getElementById('minipanierOverlay').classList.add('ouvert');
  document.body.style.overflow = 'hidden';
}
function fermerMiniPanier() {
  document.getElementById('minipanierDrawer').classList.remove('ouvert');
  document.getElementById('minipanierOverlay').classList.remove('ouvert');
  document.body.style.overflow = '';
}

/* --- Rendre le contenu --- */
function rendreMiniPanier() {
  var panier  = getPanier();
  var corps   = document.getElementById('minipanierCorps');
  var footer  = document.getElementById('minipanierFooter');
  var badge   = document.getElementById('miniBadgeQte');
  var totalQte = panier.reduce(function(s, a) { return s + a.quantite; }, 0);

  badge.textContent = totalQte;

  /* Panier vide */
  if (panier.length === 0) {
    corps.innerHTML =
      '<div class="mini-vide">' +
        '<span class="mini-vide-icon">🛒</span>' +
        'Ton panier est vide...<br>' +
        '<a href="index.html" onclick="fermerMiniPanier()">Découvrir nos produits ✨</a>' +
      '</div>';
    footer.style.display = 'none';
    return;
  }

  /* Articles */
  var sous = 0;
  var html = '';
  panier.forEach(function(art, i) {
    var ligne = art.prix * art.quantite;
    sous += ligne;
    html +=
      '<div class="mini-article">' +
        '<img src="' + art.image + '" alt="' + art.nom + '">' +
        '<div class="mini-info">' +
          '<div class="mini-nom">'  + art.nom + '</div>' +
          '<div class="mini-unit">' + fmt(art.prix) + ' / unité</div>' +
          '<div class="mini-qte">' +
            '<button onclick="miniChangerQte(' + i + ',-1)">−</button>' +
            '<span>' + art.quantite + '</span>' +
            '<button onclick="miniChangerQte(' + i + ',1)">+</button>' +
          '</div>' +
        '</div>' +
        '<div class="mini-droite">' +
          '<div class="mini-prix">' + fmt(ligne) + '</div>' +
          '<button class="mini-suppr" onclick="miniSupprimer(' + i + ')" title="Supprimer">🗑️</button>' +
        '</div>' +
      '</div>';
  });
  corps.innerHTML = html;

  /* Récap */
  var liv = sous >= 50 ? 0 : 4.99;
  document.getElementById('miniSousTotal').textContent = fmt(sous);
  document.getElementById('miniLivraison').textContent = liv === 0 ? 'Gratuite 🎉' : fmt(liv);
  document.getElementById('miniTotal').textContent     = fmt(sous + liv);
  footer.style.display = 'block';
}

/* --- Actions --- */
function miniChangerQte(i, delta) {
  var p = getPanier();
  var nouvelleQte = p[i].quantite + delta;

  if (nouvelleQte <= 0) {
    p.splice(i, 1);
    toastMini('Article retiré du panier 🗑️');
  } else {
    /* Vérification stock */
    var produitData = typeof produits !== 'undefined'
      ? produits.find(function(pr) { return pr.nom === p[i].nom; })
      : null;
    if (produitData && produitData.stock !== undefined && nouvelleQte > produitData.stock) {
      toastMini('⚠️ Stock insuffisant — maximum ' + produitData.stock + ' disponible' + (produitData.stock > 1 ? 's' : '') + '.');
      return;
    }
    p[i].quantite = nouvelleQte;
  }

  savePanier(p);
  rendreMiniPanier();
  majBadgeGlobal();
}
function miniSupprimer(i) {
  var p = getPanier();
  var nom = p[i].nom;
  p.splice(i, 1);
  savePanier(p);
  rendreMiniPanier();
  majBadgeGlobal();
  toastMini('"' + nom + '" retiré du panier 🗑️');
}
function miniCommander() {
  toastMini('Merci pour ta commande ! 🎉 On te contacte bientôt ✨');
  setTimeout(function() {
    savePanier([]);
    rendreMiniPanier();
    majBadgeGlobal();
    fermerMiniPanier();
  }, 2000);
}

/* --- Badge menu global --- */
function majBadgeGlobal() {
  var total = getPanier().reduce(function(s, a) { return s + a.quantite; }, 0);
  var b = document.getElementById('badgeMenu');
  if (b) b.textContent = total;
}

/* --- Détournement du lien panier dans le menu --- */
document.addEventListener('DOMContentLoaded', function() {
  majBadgeGlobal();

  /* Ouvre le mini-panier au lieu de naviguer vers panieremma.html */
  var lienPanier = document.querySelector('a.boutonpanier');
  if (lienPanier) {
    lienPanier.addEventListener('click', function(e) {
      e.preventDefault();
      ouvrirMiniPanier();
    });
  }
});