const client = require("../api/client");

describe("JSONPlaceholder API tests", () => {

  // 1. GET all posts
  test("GET /posts - should return list of posts", async () => {
    const response = await client.get("/posts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  // 2. GET post by id
  test("GET /posts/1 - should return single post", async () => {
    const response = await client.get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title");
  });

  // 3. GET comments for post
  test("GET /posts/1/comments - should return comments", async () => {
    const response = await client.get("/posts/1/comments");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty("postId", 1);
  });

  // 4. POST create new post
  test("POST /posts - should create new post", async () => {
    const newPost = {
      title: "Test title",
      body: "Test body",
      userId: 1,
    };

    const response = await client.post("/posts", newPost);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    expect(response.data).toHaveProperty("id");
  });

  // 5. POST create comment
  test("POST /comments - should create comment", async () => {
    const newComment = {
      name: "QA Test",
      email: "test@test.com",
      body: "Test comment",
      postId: 1,
    };

    const response = await client.post("/comments", newComment);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    expect(response.data).toHaveProperty("id");
  });

});