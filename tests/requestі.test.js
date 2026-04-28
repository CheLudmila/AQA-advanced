const { getPostsWithHeadersAndParams } = require("../api/requestClient");

describe("Headers and Params tests", () => {

  test("should send correct headers and params", async () => {
    const response = await getPostsWithHeadersAndParams();

    // статус
    expect(response.status).toBe(200);

    // перевірка, що params реально передані
    expect(response.config.params.userId).toBe(1);

    // перевірка header (що він був у запиті)
    expect(response.config.headers["Custom-Header"]).toBe("QA-Automation");

    // перевірка, що прийшли дані
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    // перевірка, що params вплинули на результат
    response.data.forEach((post) => {
      expect(post.userId).toBe(1);
    });
  });

});