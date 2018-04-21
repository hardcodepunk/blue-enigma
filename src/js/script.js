var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("site-nav").style.transform = "translate(0,0)"
  } else {
    document.getElementById("site-nav").style.transform = "translate(0,-70px)"
  }
  prevScrollpos = currentScrollPos;
}
