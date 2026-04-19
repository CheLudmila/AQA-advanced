const person = {
  firstName: "Людмила",
  lastName: "Череднюк",
  age: 35
};

person.email = "lyudmyla.cherednyuk@gmail.com";

delete person.age;

console.log(person);