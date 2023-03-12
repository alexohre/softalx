// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";

import "./jq";
// import "modernizr";
$(document).on("turbo:load", function () {
  // document.addEventListener("turbo:load", function () {
  // alert("hey");
  console.log("Hey");
  // $(".ax-menubar").on("turbo:click", function (e) {
  //   e.preventDefault();
  //   $(".popup-mobile-manu").toggleClass("visible");
  //   $(this).toggleClass("active");
  // });
});

import "./custom/bootstrap";
import "./custom/waypoints";
import "./custom/wow";
import "./custom/imagesloaded";
// import "./custom/isotope";
//= require isotope
import "./custom/tilt";
import "./custom/tilt";
import "./custom/anime";
// import "./custom/gsap";
// import "gsap";
import "./custom/scrollmagic";
// import "./custom/addindicators";
import "./custom/slick";
import "./custom/scrollup";
import "./custom/myjs";
