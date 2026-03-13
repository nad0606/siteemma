
var filtres = document.getElementById('catFiltres');
var hintR = document.getElementById('catScrollHint');
var hintL = document.getElementById('catScrollLeft');

function majFleches() {
  var atEnd   = filtres.scrollLeft + filtres.clientWidth >= filtres.scrollWidth - 5;
  var atStart = filtres.scrollLeft <= 5;
  hintR.style.opacity = atEnd   ? '0' : '1';
  hintL.style.opacity = atStart ? '0' : '1';
}
majFleches();

hintR.addEventListener('click', function() { filtres.scrollBy({ left: 150, behavior: 'smooth' }); });
hintL.addEventListener('click', function() { filtres.scrollBy({ left: -150, behavior: 'smooth' }); });
filtres.addEventListener('scroll', majFleches);


  (function() {
    var params = new URLSearchParams(window.location.search);
    var filtre = params.get('filtre');
    if (filtre && filtre !== 'tous') {
      var btns = document.querySelectorAll('.cat-btn');
      btns.forEach(function(btn) {
        btn.classList.remove('actif');
        if (btn.textContent.toLowerCase().includes(filtre.toLowerCase())) {
          btn.classList.add('actif');
          filtrer(filtre, btn);
        }
      });
    }
  })();
