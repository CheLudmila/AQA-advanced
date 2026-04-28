const client = require("./client");

async function getUser(userId) {
  try {
    const response = await client.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    return {
      error: true,
      status: error.response?.status,
    };
  }
}

module.exports = { getUser };