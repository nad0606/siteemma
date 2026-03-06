var btn = document.createElement('button');
btn.id = 'btnTop';
btn.className = 'btn-top';
btn.title = 'Retour en haut';
btn.innerHTML = '☝';
btn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.body.appendChild(btn);

// Affiche/cache le bouton selon le scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});