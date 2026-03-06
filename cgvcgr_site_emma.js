

  /*fonction tableau CGVCGR*/

  function afficherTab(id,btn){
    document.querySelectorAll(".tabpanel").forEach(function(p){p.classList.remove("actif")});
    document.querySelectorAll(".tabbtn").forEach(function(b){b.classList.remove("actif")});
    document.getElementById("tab"+id).classList.add("actif");
    btn.classList.add("actif");
    window.scrollTo({top:0,behavior:"smooth"});
  }
 