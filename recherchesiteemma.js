
/* Fonction appelée depuis le formulaire sur toutes les pages */
function rechercherProduits(event, form) {
  event.preventDefault();
  var q = form.querySelector('input[name="q"]').value.trim();
  if (!q) return;
  window.location = 'catalogueemma.html?q=' + encodeURIComponent(q);
}

/* ── Sur la page catalogue : lire le paramètre q et filtrer ── */
document.addEventListener('DOMContentLoaded', function() {
  var params = new URLSearchParams(window.location.search);
  var q = params.get('q');
  if (!q || typeof toutesLesCartes === 'undefined' || typeof produits === 'undefined') return;

  q = q.toLowerCase().trim();

  /* Afficher le mot recherché */
  var titreEl = document.querySelector('.catalogue-titre');
  if (titreEl) titreEl.textContent = '🔍 Résultats pour "' + params.get('q') + '"';
  var sousEl = document.querySelector('.catalogue-sous');
  if (sousEl) sousEl.textContent = '';

  /* Désactiver les boutons filtres */
  document.querySelectorAll('.cat-btn').forEach(function(b) { b.classList.remove('actif'); });

  var nbResultats = 0;

  toutesLesCartes.forEach(function(carte) {
    var produit = produits.find(function(p) { return p.id === parseInt(carte.dataset.id); });
    if (!produit) { carte.style.display = 'none'; return; }

    var texte = [
      produit.nom || '',
      produit.categorie || '',
      produit.description || '',
      produit.materiaux || '',
      (produit.variations || []).map(function(v) {
        return v.nom + ' ' + (v.options || []).join(' ');
      }).join(' ')
    ].join(' ').toLowerCase().replace(/<[^>]*>/g, ' ');

    if (texte.includes(q)) {
      carte.style.display = '';
      nbResultats++;
    } else {
      carte.style.display = 'none';
    }
  });

  if (nbResultats === 0) {
    var grille = document.getElementById('produitsGrille');
    if (grille) {
      grille.innerHTML = '<div style="padding:20px;font-family:Pacifico,cursive;color:#c9a0c4;font-size:1.6rem;">' +
        '😔 Aucun produit trouvé pour "' + params.get('q') + '"<br>' +
        '<a href="catalogueemma.html" style="color:#E365C1;font-size:1.2rem;margin-top:12px;display:inline-block;">← Voir tous les produits</a>' +
        '</div>';
    }
  }
});