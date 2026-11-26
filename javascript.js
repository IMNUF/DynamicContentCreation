const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();

}

 
addProductButton.addEventListener('click', () => {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    if (name === '' || isNaN(price) || price <= 0) {
        alert('Please enter a Product Name and price greater than 0.');
        return
    }

// CREATE LIST ITEM FOR PRODUCT
// HTML ELEMENTS
// LIST
    const item = document.createElement('li');
    item.className = 'cart-item';
    item.dataset.price = price;
 // SPAN FOR NAME
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name; 
 // SPAN FOR PRICE 
    const priceSpan = document.createElement('span');
    priceSpan.textContent = '$' + price.toFixed(2);
 // SPAN FOR REMOVE  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'
    removeButton.addEventListener('click', removeItem);
// APPEND/PUT TOGETHER AND ADD TO CART
    item.append(nameSpan, priceSpan, removeButton);
    cart.appendChild(item)
// APPEND/PUT TOGETHER AND ADD TO CART
    updateTotalPrice(price);
//CLEAR INPUT AND REST 
    productNameInput.value = '';
    productPriceInput.value = '';
    productNameInput.focus();

});
