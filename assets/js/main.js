const toggle_in = document.querySelector(".toggle_in");
const toggle_out = document.querySelector(".toggle_out");
const mobileMenu = document.querySelector(".mobile_menu");
const dekstop_menu = document.querySelector(".dekstop_menu");

toggle_in.addEventListener("click", showMenu);
toggle_out.addEventListener("click", hideMenu);

function showMenu() {
  mobileMenu.classList.add("menu_toggled");
}

function hideMenu() {
  mobileMenu.classList.remove("menu_toggled");
}

// tab area
("use strict");

function firstsTabs() {
  var firstbindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", firstchange, false);
    }
  };
  var firstclear = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      var id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("active");
    }
  };
  var firstchange = function (e) {
    firstclear();
    e.target.classList.add("active");
    var id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("active");
  };
  firstbindAll();
}
var connectTabs = new firstsTabs();

// tab two
function SecTabs() {
  var SecbindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab-two]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", Secchange, false);
    }
  };
  var Secclear = function () {
    var menuElements = document.querySelectorAll("[data-tab-two]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      var id = menuElements[i].getAttribute("data-tab-two");
      document.getElementById(id).classList.remove("active");
    }
  };
  var Secchange = function (e) {
    Secclear();
    e.target.classList.add("active");
    var id = e.currentTarget.getAttribute("data-tab-two");
    document.getElementById(id).classList.add("active");
  };
  SecbindAll();
}

var SecconnectTabs = new SecTabs();

// scroll screen
window.onscroll = function () {
  scrollFunction();
};
const myFunctionFive = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
var mybutton = document.querySelector(".scroll_top");

function scrollFunction() {
  document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
    ? (mybutton.style.visibility = "visible")
    : (mybutton.style.visibility = "hidden");
}

// what we do Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Demolition Slider
// what we do Slider
let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }

  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}
// tab sub categories
const tab = document.querySelectorAll(".b-nav-tab");

for (let i = 0; i < tab.length; i++) {
  const elem = tab[i];
  elem.addEventListener("click", setActiveClass);
}

function setActiveClass(event) {
  if (document.querySelector(".b-nav-tab.tog") != null) {
    document.querySelector(".b-nav-tab.tog").classList.remove("tog");
  }
  this.classList.add("tog");
  event.target.addEventListener("click", function () {
    this.classList.toggle("tog");
  });
}
