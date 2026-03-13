
var fermerTimer = null;
 
function ouvrirSousMenu() {
  clearTimeout(fermerTimer);
  var btn = document.querySelector('.cat-btn-has-sub');
  var menu = document.getElementById('insertSousMenu');
  var rect = btn.getBoundingClientRect();
  menu.style.top  = (rect.bottom + 6) + 'px';
  menu.style.left = rect.left + 'px';
  menu.classList.add('ouvert');
}
function fermerSousMenuDelai() {
  fermerTimer = setTimeout(function() {
    document.getElementById('insertSousMenu').classList.remove('ouvert');
  }, 200);
}
function annulerFermeture() {
  clearTimeout(fermerTimer);
}
 
var motsThemes = {
  hiver:    ['hiver', 'noël', 'noel', 'banquise', 'bonhomme', 'renne', 'sapin', 'neige'],
  printemps:['printemps', 'fleur', 'oiseau', 'papillon', 'pâques', 'paques', 'lapin', 'jardin', 'saint valentin'],
  ete:      ['été', 'ete', 'garage', 'voiture', 'pompier', 'plage', 'couleur'],
  automne:  ['automne', 'halloween', 'sorcière', 'citrouille', 'écureuil', 'ecureuil', 'gland', 'forêt', 'foret']
};
 
function filtrerInsert(theme, btn) {
  /* Marquer bouton actif dans le sous-menu */
  document.querySelectorAll('.cat-sous-btn').forEach(function(b) { b.classList.remove('actif'); });
  if (btn) btn.classList.add('actif');
 
  /* Marquer le bouton parent comme actif */
  document.querySelectorAll('.cat-btn').forEach(function(b) { b.classList.remove('actif'); });
  document.querySelector('.cat-btn-has-sub').classList.add('actif');
 
  /* Fermer le sous-menu */
  document.getElementById('insertSousMenu').classList.remove('ouvert');
 
  if (theme === 'tous-inserts') {
    filtrer('Insert', null);
    return;
  }
 
  var mots = motsThemes[theme] || [];
  toutesLesCartes.forEach(function(carte) {
    var cat = (carte.dataset.categorie || '').toLowerCase();
    var nom = (carte.dataset.nom || carte.querySelector('.produit-nom') ? carte.querySelector('.produit-nom').textContent : '').toLowerCase();
 
    /* D'abord, cacher tout ce qui n'est pas Insert */
    if (!cat.includes('insert')) {
      carte.style.display = 'none';
      return;
    }
    /* Puis filtrer par thème dans le nom */
    var match = mots.some(function(m) { return nom.includes(m); });
    carte.style.display = match ? '' : 'none';
  });
}