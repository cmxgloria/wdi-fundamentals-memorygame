var max = 20;
var result = 1;
while (result <= max) {
  if (result % 3 === 0 && result % 5 === 0) {
    console.log("fizzbuzz");
  } else if (result % 3 === 0) {
    console.log("fizz");
  } else if (result % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(result);
  }
  result = result + 1;
}

//
1;
2;
("fizz");
4;
("buzz");
("fizz");
7;
8;
("fizz");
("buzz");
11;
("fizz");
13;
14;
("fizzbuzz");
16;
17;
("fizz");

// we can use the for to do this

var max = 20;
for (let result = 1; result <= max; result++) {
  if (result % 3 === 0 && result % 5 === 0) {
    console.log("fizzbuzz");
  } else if (result % 3 === 0) {
    console.log("fizz");
  } else if (result % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(result);
  }
}
