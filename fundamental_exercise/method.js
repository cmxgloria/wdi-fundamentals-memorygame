const myMotorcycle = {
  // Properties
  color: "brown",
  model: "Sportster 883 Deluxe",
  make: "Harley-Davidson",
  year: "1994",

  // Method — note that this is also a key-value pair, just like a property
  accelerate: function() {
    console.log("Zoom zoom!");
  }
};

//
const myMotorcycle = {
  // Properties
  color: "brown",
  model: "Sportster 883 Deluxe",
  make: "Harley-Davidson",
  year: "1994",

  // Method
  accelerate: function() {
    console.log("Zoom zoom!");
  }
};
// Here we are “calling” the accelerate() method:
myMotorcycle.accelerate();
// => "Zoom zoom!"

//
const myMotorcycle = {
  // Properties
  color: "brown",
  model: "Sportster 883 Deluxe",
  make: "Harley-Davidson",
  year: "1994",

  // Methods
  getMakeAndColor: function() {
    console.log("My motorcycle is a " + this.color + " " + this.make); // read this line again!!
  },
  accelerate: function() {
    console.log("Zoom zoom!");
  }
};

//
const poem = {
  author: "Robert Frost",
  datePublished: 1916,
  name: "The Road Not Taken",
  famousLine: "Two roads diverged in a yellow wood",
  quote: function() {
    console.log(this.famousLine);
  }
};
poem.quote();
