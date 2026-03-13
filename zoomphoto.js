 
    function ouvrirLightbox(src) {
  var lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  lb.classList.add('active');
}
function fermerLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

 