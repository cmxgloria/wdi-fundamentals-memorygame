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
