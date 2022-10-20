////////js for the navigation menu
var menuOpen = document.getElementById('menu-toggler');
var menuClose = document.getElementById('menu-toggler');

menuOpen.style.maxHeight = '0px';
menuClose.style.maxHeight = '0px';

function menutoggle() {
  if (menuOpen.style.maxHeight == '0px') {
    menuOpen.style.maxHeight = '550px';
  } else {
    menuOpen.style.maxHeight = '0px';
  }
}

function menutoggle() {
  if (menuClose.style.maxHeight == '550px') {
    menuClose.style.maxHeight = '0px';
  } else {
    menuOpen.style.maxHeight = '550px';
  }
}

/////////////// CART /////////////////////////

////////////removing products from the cart
var removeCartItemButton = document.getElementsByClassName('remove-btn');
console.log(removeCartItemButton);
for (var i = 0; i < removeCartItemButton.length; i++) {
  let button = removeCartItemButton[i];
  button.addEventListener('click', function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

//////////////updating cart total
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName(
    'cart-items-container'
  )[0];
  var cartRows = cartItemContainer.document.getElementsByClassName('cart-row');
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName(
      'cart-quantity-input'
    )[0];
    var price = priceElement.innerText;
  }
}
