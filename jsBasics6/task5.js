const users = [
  { name: "Людмила", email: "liudmila@gmail.com", age: 29 },
  { name: "Андрій", email: "andriy@gmail.com", age: 30 },
  { name: "Олег", email: "oleg@gmail.com", age: 45 }
];


for (const { name, email, age } of users) {
  console.log("Ім'я:", name);
  console.log("Email:", email);
  console.log("Вік:", age);
  console.log("-----");
}