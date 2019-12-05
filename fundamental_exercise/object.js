const pet = {
  name: "Daisy",
  species: "cat",
  favoriteToy: "laser pointer",
  age: 5
};
pet.age = 6;

pet.favoriteFood = "milk";

const petName = pet.name;

//
// write your code below
const contacts = [
  {
    firstName: "Asho",
    lastName: "Asho",
    phone: "(512) 355-0453",
    email: "sanjuasho@email.com"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    phone: "(312) 641-2203",
    email: "janedoe@email.com"
  },
  {
    firstName: "Haru",
    lastName: "Ito",
    phone: "(415) 604-4219",
    email: "haruito@email.com"
  }
];
contacts.forEach(contact => console.log(contact.firstName));
//'Asho'
//'Jane'
//'Haru'
