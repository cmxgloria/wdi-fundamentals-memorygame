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

// another exercise
var favoriteMovie = "jaws";
var moviePhrase;
switch (favoriteMovie) {
  case "jaws":
    moviePhrase = "You're gonna need a bigger boat.";
    break;
  case "the shining":
    moviePhrase = "All work and no play makes Jack a dull boy.";
    break;
  case "star wars":
    moviePhrase = "Do. Or do not. There is no try.";
    break;
  case "forrest gump":
    moviePhrase = "Life was like a box of chocolates.";
    break;
  case "back to the future":
    moviePhrase = "Where we're going, we don't need roads.";
    break;
  default:
    moviePhrase = "Great movie choice!";
}
moviePhrase;
