document.querySelectorAll(".connection_btn ").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var blockOpen = document.querySelector(".block-open");
    blockOpen.style.display = "block";
  });
});

var menuIcon = document.querySelector(".menu-icon");
var headerMenu = document.querySelector(".header__menu-active");

function toggleMenu() {
  if (headerMenu.style.display === "none") {
    headerMenu.style.display = "block";
  } else {
    headerMenu.style.display = "none";
  }
}

menuIcon.addEventListener("click", toggleMenu);
