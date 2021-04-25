window.onscroll = function() {setSticky()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function setSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

