const { getInvalidEndpoint } = require("../api/errorClient");

describe("Error handling tests", () => {
  test("should handle 404 error correctly", async () => {
    const response = await getInvalidEndpoint();

    expect(response.status).toBe(404);
    expect(response.message).toContain("Request failed with status code 404");
  });
});