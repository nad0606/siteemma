function majBadge() { /*fonction panier pour afficher la quantité d'article*/
    var p = JSON.parse(localStorage.getItem('panier') || '[]');
    var total = p.reduce(function(s, a) { return s + a.quantite; }, 0);
    document.getElementById('badgeMenu').textContent = total;
  }
  majBadge();