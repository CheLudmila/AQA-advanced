const client = require("./client");

async function getPostsWithHeadersAndParams() {
  const response = await client.get("/posts", {
    headers: {
      "Custom-Header": "QA-Automation",
    },
    params: {
      userId: 1,
    },
  });

  return response;
}

module.exports = { getPostsWithHeadersAndParams };