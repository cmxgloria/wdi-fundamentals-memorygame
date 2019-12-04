var coffeeIsHot = false;
var isCoffeeReady;

if (coffeeIsHot === true) {
  isCoffeeReady = "Drink your hot coffee!";
} else {
  isCoffeeReady = "Time to brew a new batch.";
}

isCoffeeReady;
// => "Time to brew a new batch."

var coffeeIsHot = false;

var isCoffeeReady = coffeeIsHot === true ? "Drink your hot coffee!" : "Time to brew a new batch.";

isCoffeeReady;
// => "Time to brew a new batch."

//another sample
var temperature = 55;
var typeOfExercise;

if (temperature >= 45) {
typeOfExercise = "Go for a run outside.";
} else {
typeOfExercise = "Go to the gym.";
}

typeOfExercise;
// => "Go for a run outside."
This could be shortened to the following:

var temperature = 55;

var typeOfExercise = temperature >= 45 ? "Go for a run outside." : "Go to the gym.";

typeOfExercise;
// => "Go for a run outside."

//sample

var movieCategory = "scary";
var isMovieKidFriendly;

if (movieCategory === "scary" || movieCategory === "violent") {
isMovieKidFriendly = "Pick a different movie.";
} else {
isMovieKidFriendly = "Movie is kid-friendly.";
}

isMovieKidFriendly;
// => "Pick a different movie."

// ternary
var movieCategory = "scary";
var isMovieKidFriendly = movieCategory==='scary' || movieCategory ===violent ? "Pick a different movie" : "Movie is kid-friendly. ";
isMovieKidFriendly;
