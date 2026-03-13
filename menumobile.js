
function toggleMenu() {
  var menu = document.getElementById('menuHamburger');
  var nav = document.querySelector('.menuboutons');
  nav.classList.toggle('ouvert');
  menu.classList.toggle('ouvert');
}
// Fermer le menu si on clique ailleurs
document.addEventListener('click', function(e) {
  var nav = document.querySelector('.menuboutons');
  var btn = document.getElementById('menuHamburger');
  if (nav && btn && !nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('ouvert');
    btn.classList.remove('ouvert');
  }
});
