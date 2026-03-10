/*fonction du panier */
  function getPanier() {
    return JSON.parse(localStorage.getItem('panier') || '[]');
  }
  function savePanier(p) {
    localStorage.setItem('panier', JSON.stringify(p));
  }
  function fmt(n) {
    return n.toFixed(2).replace('.', ',') + ' €';
  }
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2800);
  }
  function majBadge() {
    var p = getPanier();
    var total = p.reduce(function(s, a) { return s + a.quantite; }, 0);
    document.getElementById('badgeMenu').textContent = total;
  }
  function rendrePanier() {
    var panier = getPanier();
    var conteneur = document.getElementById('panierContenu');
    var recap = document.getElementById('panierRecap');
    if (panier.length === 0) {
      conteneur.innerHTML = '<div class="paniervide"><span class="videicon">🛒</span>Ton panier est vide...<br><a href="index.html" style="color:#E365C1;font-family:Pacifico,cursive;font-size:0.9rem;margin-top:12px;display:inline-block;">Découvrir nos produits ✨</a></div>';
      recap.style.display = 'none';
      majBadge();
      return;
    }
    var sous = 0;
    var html = '<div class="panierliste">';
    panier.forEach(function(article, i) {
      var prixLigne = article.prix * article.quantite;
      sous += prixLigne;
      html += '<div class="panierarticle">';
      html += '<img src="' + article.image + '" alt="' + article.nom + '">';
      html += '<div class="panierinfo"><div class="paniernom">' + article.nom + '</div><div class="panierprixunit">' + fmt(article.prix) + ' / unité</div></div>';
      html += '<div class="qtecontrole"><button onclick="changerQte(' + i + ',-1)">−</button><span class="qte-val">' + article.quantite + '</span><button onclick="changerQte(' + i + ',1)">+</button></div>';
      html += '<div class="prixligne">' + fmt(prixLigne) + '</div>';
      html += '<button class="btnsupprimer" onclick="supprimer(' + i + ')" title="Supprimer">🗑️</button>';
      html += '</div>';
    });
    html += '</div>';
    conteneur.innerHTML = html;
    var livNum = sous >= 50 ? 0 : 5.50;
    document.getElementById('sousTotal').textContent = fmt(sous);
    document.getElementById('livraison').textContent = livNum === 0 ? 'Livraison gratuite 🎉' : fmt(livNum);
    document.getElementById('totalFinal').textContent = fmt(sous + livNum);
    recap.style.display = 'block';
    majBadge();
  }
  function changerQte(i, delta) {
    var p = getPanier();
    var nouvelleQte = p[i].quantite + delta;

    if (nouvelleQte <= 0) {
      p.splice(i, 1);
      toast('Article retiré du panier 🗑️');
    } else {
      /* Vérification stock */
      var produitData = typeof produits !== 'undefined'
        ? produits.find(function(pr) { return pr.nom === p[i].nom; })
        : null;
      if (produitData && produitData.stock !== undefined && nouvelleQte > produitData.stock) {
        toast('⚠️ Stock insuffisant — maximum ' + produitData.stock + ' disponible' + (produitData.stock > 1 ? 's' : '') + '.');
        return;
      }
      p[i].quantite = nouvelleQte;
    }

    savePanier(p); rendrePanier();
  }
  function supprimer(i) {
    var p = getPanier();
    var nom = p[i].nom;
    p.splice(i, 1);
    savePanier(p); rendrePanier();
    toast('"' + nom + '" retiré du panier 🗑️');
  }
  function commander() {
    toast('Merci pour ta commande ! 🎉 On te contacte bientôt ✨');
    setTimeout(function() { savePanier([]); rendrePanier(); }, 2000);
  }
  rendrePanier();