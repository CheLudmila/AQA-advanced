jest.mock("../api/client"); // мок клієнта

const client = require("../api/client");
const { getUser } = require("../api/userService");

describe("Mocking Axios tests", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return user data (success case)", async () => {
    // підробляємо відповідь
    client.get.mockResolvedValue({
      data: {
        id: 1,
        name: "Leanne Graham",
      },
    });

    const result = await getUser(1);

    expect(client.get).toHaveBeenCalledWith("/users/1");
    expect(result).toEqual({
      id: 1,
      name: "Leanne Graham",
    });
  });

  test("should handle error (error case)", async () => {
    // підробляємо помилку
    client.get.mockRejectedValue({
      response: { status: 404 },
    });

    const result = await getUser(999);

    expect(client.get).toHaveBeenCalledWith("/users/999");
    expect(result).toEqual({
      error: true,
      status: 404,
    });
  });

});