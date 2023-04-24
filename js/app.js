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

// /////////////// CART /////////////////////////
// var removeCartItemButton = document.getElementsByClassName('remove-btn');

// for (var i = 0; i < removeCartItemButton.length; i++) {
//   var button = removeCartItemButton[i];
//   button.addEventListener('click', function (event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal();
//   });
// }

// function updateCartTotal() {
//   var cartItemContainer = document.getElementsByClassName(
//     'cart-items-container'
//   )[0];
//   var cartRows = cartItemContainer.document.getElementsByClassName('cart-row');
//   for (var i = 0; i < cartRows.length; i++) {
//     var cartRow = cartRows[i];
//     var priceElement = cartRow.getElementsByClassName('cart-price')[0];
//     var quantityElement = cartRow.getElementsByClassName(
//       'cart-quantity-input'
//     )[0];

//     var price = parseFloat(priceElement.innerText.replace('$', ''));
//     var quantity = quantityElement.value;
//     console.log(price * quantity);
//   }
// }

///////////////// WHATSAPP SCRIPT ////////////////
var linkBtns = document.querySelectorAll('.link');

for (var i = 0; i < linkBtns.length; i++) {
  linkBtns[i].addEventListener('click', function () {
    var formCon = document.querySelector('.customer-info-form-con');
    formCon.classList.add('show');

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      formCon.classList.remove('show');
    });

    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', function () {
      formCon.classList.remove('show');
    });

    const proceedBtn = document.querySelector('#proceed-btn');
    const customerName = document.querySelector('#customer-name');
    const customerNumber = document.querySelector('#customer-number');
    const customerAddress = document.querySelector('#customer-address');
    var productName =
      this.parentElement.querySelector('.product-name').textContent;
    const message = document.querySelector('#message');
    message.value = productName;

    proceedBtn.addEventListener('click', () => {
      var waUrl = `https://wa.me/+2348056101383?text= Product Name: ${productName} %0a Name: ${customerName.value} %0a Phone: ${customerNumber.value} %0a Address: ${customerAddress.value}. %0a I will like to place an order for the above item`;
      window.open(waUrl, '_blank', focus()); // this opens a new browser tab
      // window.open(waUrl, '_blank', 'focus'); // this opens a new browser window
    });
  });
}
