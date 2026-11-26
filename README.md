## REFLECTION 

#### How did you dynamically create and append new elements to the DOM? 
 I used document.createElement to build each new product from scratch when the Add Product button is clicked. I made a list item, a span for the name, a span for the price, and a Remove button. Then I used textContent to put words inside them and append to put them together. The last step was cart.appendChild(item), which finally made the product show up on the page. I had to see it work a few times before it made sense that you build the pieces first and only then add them to the page. 

#### What steps did you take to ensure accurate updates to the total price? 
I made sure that each time a product is added, I send its price to the total. I also show each price with toFixed(2) so it always has two decimals. To check my work, I added a few products with decimal prices, did the math myself, and compared my answer to the total on the page. I also checked that removing a product brought the total back down by the right amount. 

 
#### How did you handle invalid input for product name or price? 
 I added a check before anything gets created. I used trim() so a name with only spaces counts as empty, and parseFloat and isNaN to catch prices that aren’t real numbers. If the name is empty or the price isn’t greater than 0, an alert tells the user what to fix and return stops the function, so nothing gets added.  

 

#### What challenges did you face when implementing the remove functionality? 
 My challenge was getting each Remove button to work for its own product. I learned that every product has to carry its own price with it, so I save it in data-price when I create the item. I also had to connect each button with addEventListener, and I had to do that when the button is created, not before. I also lost a lot of time to one typo, parsefloat instead of parseFloat. Learning learning learning!