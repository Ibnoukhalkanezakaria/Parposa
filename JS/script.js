// Open & Close Menu

let navToggle = document.querySelector(".nav-toggle");
let rs = document.querySelector(".r-s");
let body = document.querySelector("body");

navToggle.onclick = function () {
  navToggle.classList.toggle("active");
  rs.classList.toggle("show");
  body.classList.toggle("hidden");
};
