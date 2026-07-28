
const products = [];
//step 1 . connect JavaScript to the HTML (DOM Elements)

const productNameInput = document.getElementById('product-name');

const productPriceInput = document.getElementById('product-price');

const addProductButton = document.getElementById('add-product');

const cart = document.getElementById('cart');

const totalPriceSpan = document.getElementById('total-price');

// step 2 create the data 

let totalPrice = 0; 

// const cart = [
//   {
//     id: 1,
//     name: "Laptop Monitor",
//     price: 65.99,
//     quantity: 1,
//   }
// ]


// step 3 write the functions to add and remove products, update quantity,  + step 4 render the cart
function addToCart() {
  const productName = productNameInput.value; // get the user input

  const productPrice = productPriceInput.value; // get the user price input


  const cartProduct = document.createElement("li"); //create new HTML element

  cartProduct.textContent = `${productName} - $${productPrice}` //put the user input text inside the new <li> element

  cart.appendChild(cartProduct); 

}

//function to update total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}


//function to remove an item

function removeItem(event) {
  const item = event.target.closest('li');

  const price = parseFloat(item.dataset.price); 

  updateTotalPrice(-price);

  item.remove();
}

function updateQuantity() {

}

function validateInput() {

}

// step 5 add event listeners - after declaring everything above
addProductButton.addEventListener("click", addToCart);

console.log(addToCart)
