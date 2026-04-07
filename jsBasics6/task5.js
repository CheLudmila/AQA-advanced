const users = [
  { email: "liudmila@gmail.com", age: 29, isActive: true },
  { name: "Андрій", city: "Київ", isActive: false },
  { name: "Олег", email: "oleg@gmail.com" },
  { age: 45, isActive: true }
];

for (const {
  name = "Невідомо",
  email = "Не вказано",
  age = "Не вказано",
  isActive
} of users) {

  const activeStatus =
    isActive === undefined
      ? "Не вказано"
      : isActive
      ? "Так"
      : "Ні";

  console.log("Ім'я:", name);
  console.log("Email:", email);
  console.log("Вік:", age);
  console.log("Активний:", activeStatus);
  console.log("-----");
}