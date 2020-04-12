function cambiar_color(f) {
  if(f) document.getElementById('tituloP').style.backgroundImage = 'linear-gradient(to right, gray , gray)';
  else document.getElementById('tituloP').style.backgroundImage = 'linear-gradient(to right, #008275 , #003B35)';

}
function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
