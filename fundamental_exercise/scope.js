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
