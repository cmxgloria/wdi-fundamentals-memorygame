var total = 0;

var scorePoint = function() {
  total += 1;
  console.log(total);
};

scorePoint();
scorePoint();
scorePoint();
//1
//2
//3

//sample
var orderPizzas = function(numberPeople) {
  var numberPizzas = numberPeople / 3;
  console.log("You'll need to order " + numberPizzas + " pizzas.");
};

orderPizzas(9);
//You'll need to order 3 pizzas.

function areBothEven(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(areBothEven(2, 4));
//true

var categorize = function(number) {
  if (number < 8) {
    return 8;
  }
  number += 3;
  if (number < 15) {
    return number;
  }
  return 100;
};
console.log(categorize(10));
//13, if num is 12, will return 100, look through step by step to meet different condition, return is exiting function
