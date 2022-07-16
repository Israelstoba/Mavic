////////js for the navigation menu
var menuOpen = document.getElementById("menu-toggler");
var menuClose = document.getElementById("menu-toggler");

menuOpen.style.maxHeight = "0px";
menuClose.style.maxHeight = "0px";

function menutoggle() {
  if (menuOpen.style.maxHeight == "0px") {
    menuOpen.style.maxHeight = "550px";
  } else {
    menuOpen.style.maxHeight = "0px";
  }
}

function menutoggle() {
  if (menuClose.style.maxHeight == "550px") {
    menuClose.style.maxHeight = "0px";
  } else {
    menuOpen.style.maxHeight = "550px";
  }
}

////////Quantity increament and decreament

var quantity = document.getElementById("quantity");

var increment = 0;
var decrement = 0;

function qtyIncrement() {
  decrement = 1;
  increment += +1;
  quantity.value = increment + 1;
}

function qtyDecrement() {
  increment += -1;
  decrement = increment + 1;
  quantity.value = decrement;
  /////to avoid nagatives quantity values
  if (quantity.value <= 0) {
    quantity.value = 1;
    increment = 0;
    decrement = 0;
  }
}
