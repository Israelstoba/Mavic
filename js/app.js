////////js for the navigation menu
var menuOpen = document.getElementById("menu-toggler");
var menuClose = document.getElementById("menu-toggler");

menuOpen.style.maxHeight = "0px";
menuClose.style.maxHeight = "0px";

function menutoggle() {
  if (menuOpen.style.maxHeight == "0px") {
    menuOpen.style.maxHeight = "500px";
  } else {
    menuOpen.style.maxHeight = "0px";
  }
}

function menutoggle() {
  if (menuClose.style.maxHeight == "500px") {
    menuClose.style.maxHeight = "0px";
  } else {
    menuOpen.style.maxHeight = "500px";
  }
}
