

  
  function envoyer() {  /*fonction de la boite d'envoi de mail contact*/
    var prenom = document.getElementById('prenom').value.trim();
    var nom    = document.getElementById('nom').value.trim();
    var email  = document.getElementById('email').value.trim();
    var msg    = document.getElementById('message').value.trim();

    if (!prenom || !nom || !email || !msg) {
      var t = document.getElementById('toast');
      t.textContent = '⚠️ Merci de remplir tous les champs !';
      t.classList.add('show');
      setTimeout(function() { t.classList.remove('show'); }, 2800);
      return;
    }

   
    var sujet = encodeURIComponent('Demande de ' + prenom + ' ' + nom);
    var corps = encodeURIComponent(
      'Nom : ' + prenom + ' ' + nom + '\n' +
      'Email : ' + email + '\n\n' +
      'Message :\n' + msg
    );
    window.location.href = 'mailto:lescreationsemma06@hotmail.com?subject=' + sujet + '&body=' + corps;

    
    document.getElementById('prenomConfirm').textContent = prenom;
    document.getElementById('formulaire').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
  }

 