// 1. Отримати todo
async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw error;
  }
}

// 2. Отримати user
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// 3. Promise.all з async/await
async function getAllData() {
  try {
    const results = await Promise.all([getTodo(), getUser()]);
    console.log("Promise.all result:");
    console.log(JSON.stringify(results, null, 2));
    return results;
  } catch (error) {
    console.error("Promise.all error:", error);
  }
}

// 4. Promise.race з async/await
async function getRaceData() {
  try {
    const result = await Promise.race([getTodo(), getUser()]);
    console.log("Promise.race result:", result);
    return result;
  } catch (error) {
    console.error("Promise.race error:", error);
  }
}

// Виклик
getAllData();
getRaceData();