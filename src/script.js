
function openNav() {
  document.getElementById("sideBar").style.width = "100%";
  document.getElementById("sideNav").style.width = "75%";
}

/*Close navigation*/
function exitNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("sideNav").style.width = "0";
}
// SLIDER ON HOME PAGE 
window.onload = function () {
  let slides = document.getElementsByClassName("carousel-item");

  function addActive(slide) {
    slide.classList.add("active");
  }

  function removeActive(slide) {
    slide.classList.remove("active");
  }

  addActive(slides[0]);
  setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        setTimeout(removeActive, 350, slides[i]);
        break;
      }
      if (slides[i].classList.contains("active")) {
        setTimeout(removeActive, 350, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 1500);
};
// end of slider on home page


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



