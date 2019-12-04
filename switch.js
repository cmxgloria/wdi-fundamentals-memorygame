var groceryItem = "orange";
var price;

switch (groceryItem) {
  case "pear":
    price = "The price is $1.00";
    break;
  case "apple":
    price = "The price is $.65";
    break;
  case "orange":
    price = "The price is $.80";
    break;
  case "avocado":
    price = "The price is $1.50";
    break;
  case "grapes":
    price = "Sorry, we are out of grapes";
    break;
  default:
    price = "Item cannot be found in system";
}

price;
// => "The price is $.80"
