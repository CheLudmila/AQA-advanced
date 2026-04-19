// 1. Отримати todo
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching todo:", error);
      throw error;
    });
}

// 2. Отримати user
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching user:", error);
      throw error;
    });
}

// 3. Promise.all
const allData = Promise.all([getTodo(), getUser()])
  .then(results => {
    console.log("Promise.all result:", results);
    return results;
  })
  .catch(error => {
    console.error("Promise.all error:", error);
  });

// 4. Promise.race
const raceData = Promise.race([getTodo(), getUser()])
  .then(result => {
    console.log("Promise.race result:", result);
    return result;
  })
  .catch(error => {
    console.error("Promise.race error:", error);
  });