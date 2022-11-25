// Open & Close Menu

const navLinks = document.querySelector(".r-s");
openmenu = document.getElementById("openmenu");
closemenu = document.getElementById("closemenu");

openmenu.onclick = function () {
  navLinks.classList.add("active");
};
closemenu.onclick = function () {
  navLinks.classList.remove("active");
};
