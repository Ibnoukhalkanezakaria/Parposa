// Open & Close Menu

const navToggle = document.querySelector(".nav-toggle");
const rs = document.querySelector(".r-s");

navToggle.onclick = function () {
  navToggle.classList.toggle("active");
  rs.classList.toggle("show");
};
