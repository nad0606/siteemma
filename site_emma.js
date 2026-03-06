/*fonction apparition au scroll*/
const elements = document.querySelectorAll('.apparition');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      
      const index = Array.from(elements).indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 120);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => observer.observe(el));

/* ── Particules hero ── */
(function() {
  var cont = document.getElementById('heroParticules');
  if (!cont) return;
  for (var i = 0; i < 60; i++) {
    var p = document.createElement('div');
    p.className = 'hero-particule';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = (Math.random() * 4) + 's';
    p.style.animationDuration = (3 + Math.random() * 4) + 's';
    p.style.width = p.style.height = (8 + Math.random() * 20) + 'px';
    cont.appendChild(p);
  }
})();

/* ── Meilleures ventes ── */
(function() {
  var grille = document.getElementById('bestsellerGrille');
  if (!grille || typeof produits === 'undefined') return;
  var bs = produits.filter(function(p) { return p.bestseller; });
  if (bs.length === 0) bs = produits.slice(0, 3);
  bs.forEach(function(p) {
    var a = document.createElement('a');
    a.href = 'ficheproduit.html?id=' + p.id;
    a.className = 'bs-carte apparition';
    a.innerHTML =
      '<div class="bs-img"><img src="' + p.images[0] + '" alt="' + p.nom + '"></div>' +
      '<div class="bs-infos">' +
        '<div class="bs-cat">' + p.categorie + '</div>' +
        '<div class="bs-nom">' + p.nom + '</div>' +
        '<div class="bs-prix">' + (p.prixUnitaire ? 'dès ' : '') + p.prix + ' €</div>' +
      '</div>';
     grille.appendChild(a);
  });
  grille.querySelectorAll('.bs-carte').forEach(function(el) {
    observer.observe(el);
  });
})();

/* ── Carrousel avis ── */
var avisIdx = 0;

function getAvisVisibles() {
  return window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
}

function initAvisDots() {
  var cartes = document.querySelectorAll('#avisCarrousel .avis-carte');
  var dots = document.getElementById('avisDots');
  if (!dots || !cartes.length) return;
  var total = Math.ceil(cartes.length / getAvisVisibles());
  dots.innerHTML = '';
  for (var i = 0; i < total; i++) {
    var d = document.createElement('span');
    d.className = 'avis-dot' + (i === 0 ? ' actif' : '');
    d.setAttribute('data-i', i);
    d.onclick = function() { allerAvis(parseInt(this.getAttribute('data-i'))); };
    dots.appendChild(d);
  }
}

function allerAvis(n) {
  var cartes = document.querySelectorAll('#avisCarrousel .avis-carte');
  if (!cartes.length) return;
  var vis = getAvisVisibles();
  var total = Math.ceil(cartes.length / vis);
  avisIdx = (n + total) % total;
  var carr = document.getElementById('avisCarrousel');
  var largeurCarte = cartes[0].offsetWidth + 20;
  carr.scrollTo({ left: avisIdx * vis * largeurCarte, behavior: 'smooth' });
  document.querySelectorAll('.avis-dot').forEach(function(d, i) {
    d.classList.toggle('actif', i === avisIdx);
  });
}

function deplacerAvis(dir) { allerAvis(avisIdx + dir); }

setInterval(function() { deplacerAvis(1); }, 5000);
initAvisDots();

/* ── Badge panier ── */
(function() {
  var panier = JSON.parse(localStorage.getItem('panier') || '[]');
  var total = panier.reduce(function(acc, item) { return acc + (item.quantite || 1); }, 0);
  var badge = document.getElementById('badgeMenu');
  if (badge) badge.textContent = total;
})();