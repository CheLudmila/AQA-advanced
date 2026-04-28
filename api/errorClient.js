const client = require("./client");

async function getInvalidEndpoint() {
  try {
    // навмисно неправильний endpoint
    await client.get("/invalid-endpoint");
  } catch (error) {
    return {
      status: error.response?.status,
      message: error.message,
    };
  }
}

module.exports = { getInvalidEndpoint };