/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

//helper function
function renderEl(element, parent, textContent) {
  var newEl = document.createElement(element);
  if(textContent) {
    newEl.textContent = textContent;
  }
  parent.appendChild(newEl);
  return newEl;
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbodyEl = document.getElementsByTagName('tbody')[0];
  console.log(cart);
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.items.length; i++) {
    console.log(cart.items.items[i].quantity);
    // TODO: Create a TR
    var trEl = renderEl('tr', tbodyEl);
    // TODO: Create a TD for the delete link, quantity,  and the item
    renderEl('td', trEl, '');
    renderEl('td', trEl, cart.items.items[i].quantity);
    renderEl('td', trEl, cart.items.items[i].product);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();