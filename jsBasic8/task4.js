// Клас для роботи з todo
class TodoService {
  async getTodo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching todo:", error);
      throw error;
    }
  }
}

// Клас для роботи з user
class UserService {
  async getUser() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }
}

// Використання класів
async function run() {
  const todoService = new TodoService();
  const userService = new UserService();

  try {
    // Promise.all
    const [todo, user] = await Promise.all([
      todoService.getTodo(),
      userService.getUser()
    ]);

    console.log("Todo:", todo);
    console.log("User:", user);

    // Promise.race
    const fastest = await Promise.race([
      todoService.getTodo(),
      userService.getUser()
    ]);

    console.log("Fastest result:", fastest);

  } catch (error) {
    console.error("Error:", error);
  }
}

// запуск
run();