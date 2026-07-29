# Dynamic Shopping Cart

I built a vanilla JavaScript shopping cart to work through how JavaScript talks to a webpage and updates it in real time.


# Built With
HTML5, CSS3, JavaScript, DOM manipulation, event listners

# What It Does

You can type in a product name and price, add it to the cart, and watch it show uo on the page rigth away. Remove a product from the cart and have the total price recalculate automatically on every add or remove

# Steps I Took to Build This

I started by connecting JavaScript to my HTML using `document.getElementById()` so I could grab my inputs and containers and work with them. Then I added my variables/datat by starting with `'et totalPrice = 0`.  From there I built out my `addToCart()` function, and every time I needed something new to show up on the pahe, I followed the same order: create the element, fill it in with the right content, then attach it to the page. If I skipped any of those steps nothing would show up.

Next I had to get the cart total actually calculating correctly. Even with my price input set to `type=number"`, JavaScript stil handed that value back to me as text, not an actual number. I fixed it by converting the value with `Number()` before using it anywhere.

To keep from rewriting old logic everytime something changed, I built one function `updateTotalPrice()`, that both adding and removing items could call, either adding or subtracting depdning on the action.

Then I built the remove functionality, which took the most thinking through. The rmeove buttons don't exist anywhere in my HTML, so I used JavaScript to crate a new one for every product when it gets added. When someone clicks remove, I use `event.target.closest("li")` to find the exact item that was clicked, get its stored price, subtract it from the total, and remove it from the page.

# Reflection Questions
  **1. How did you dynamically create and append new elements to the DOM?
    Inside `addToCart)` I created a new `<li>` with `document.createElement("li")` and put theuser input for the porduct name and price using `cartProduct.textContent` then attached it to the page using `cart.appendChild(cartProduct)`. I followed the same pattern creating the remove butting with `document.createElement("button").

  **2. What steps did you take to ensure accurate updates to the total price?
    The price coming from the input was a string by default, so I converted it with `Number()` because at first I still had it as a string. I built one function `updateTotalPrice(ampunt)` that both the add and remove actions call, adding the amout when the product is added and subtracting it when one is removed. I also stored each product's price directly on its own element using `cartProduct.dataset.price`, so the exact price used to add it is the same value used to subtract it later, and I dsipalyed the total with `toFixed(2)` so it always reads it as an actual dollar amount.


  **3. How did you handle invalid input for product name or price?

  **4. What challenges did you face when implementing the remove functionality?
    The main challenge I had was figuring out how the remove funciton would know which specific price to subtract, since by the time somone clicks rmeove, the information only exists inside the DOM element itself. Storing the price on the element with a dataset solved that. The second piece was making sure the click was traced back to the correct list item rather than just the button itself, which `evemt.target.closest("li"` handles.

#