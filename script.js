
const products = [];
//step 1 . connect JavaScript to the HTML (DOM Elements)

const productNameInput = document.getElementById('product-name');

const productPriceInput = document.getElementById('product-price');

const addProductButton = document.getElementById('add-product');

const cart = document.getElementById('cart');

const totalPriceSpan = document.getElementById('total-price');

// step 2 create the data  / variables

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

  const productPrice = Number(productPriceInput.value); // get the user price input + convert to a # from a string


  const cartProduct = document.createElement("li"); //create new HTML element

  cartProduct.textContent = `${productName} - $${productPrice}` //put the user input text inside the new <li> element

  cartProduct.dataset.price = productPrice;
  //function to remove an item

  const removeButton = document.createElement("button"); //create button element in HTML

  removeButton.textContent = "❌"; 

  removeButton.addEventListener("click", removeItem);

  cartProduct.appendChild(removeButton);

  cart.appendChild(cartProduct); 

  updateTotalPrice(productPrice); 

  productNameInput.value = "";
  productPriceInput.value = "";

}

function removeItem(event) {
  const item = event.target.closest("li");

  const price = Number(item.dataset.price);

  updateTotalPrice(-price);

  item.remove();
}

//function to update total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);

}






// function updateQuantity() {

// }

// function validateInput() {

// }

// step 5 add event listeners - after declaring everything above
addProductButton.addEventListener("click", addToCart);

//console.log(addToCart)

// removeButton.addEventListener("click")