let product;
let orderAmount;

product = "Hanging Planter";
orderAmount = 35;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
  console.log(
    "It's your lucky day! There is no shipping charge for orders over $30.00."
  );
} else {
  console.log("There will be a $5.00 shipping charge for this order.");
}

product = "Shell Mirror";
orderAmount = 15;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
  console.log(
    "It's your lucky day! There is no shipping charge for orders over $30.00."
  );
} else {
  console.log("There will be a $5.00 shipping charge for this order.");
}

product = "Modern Shag Rug";
orderAmount = 75;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
  console.log(
    "It's your lucky day! There is no shipping charge for orders over $30.00."
  );
} else {
  console.log("There will be a $5.00 shipping charge for this order.");
}

//use function to make code cleaner
function orderComplete(product, orderAmount) {
  console.log("Thank you for ordering the " + product + ".");
  if (orderAmount >= 30) {
    console.log(
      "It's your lucky day! There is no shipping charge for orders over $30.00."
    );
  } else {
    console.log("There will be a $5.00 shipping charge for this order.");
  }
}

orderComplete("Hanging Planter", 35);
orderComplete("Shell Mirror", 15);
orderComplete("Modern Shag Rug", 75);

//parameter and return statement
function printLatteTotal() {
  const price = 4.5;
  const salesTaxRate = 0.1;
  const totalAmount = price + price * salesTaxRate;
  console.log("The total is $" + totalAmount);
}

printLatteTotal();

//Exiting a Function
function rockAndRoll(muted) {
  const song = “It’s only Rock ‘N’ Roll”;
  const artist = “The Rolling Stones”;
  if (muted === true) {
    return; // Here we use ‘return’ as a way to exit a function, instead of returning any value
  }
  console.log(“Now playing: “ + song + “ by “ + artist);
};

rockAndRoll(true);