const axios = require("axios");

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

// REQUEST INTERCEPTOR
client.interceptors.request.use((config) => {
  console.log("Request:", {
    method: config.method,
    url: config.url,
    data: config.data,
  });
  return config;
});

// RESPONSE INTERCEPTOR
client.interceptors.response.use(
  (response) => {
    console.log("Response:", {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("Error:", error.message);
    return Promise.reject(error);
  }
);

module.exports = client;