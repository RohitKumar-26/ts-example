import request from "supertest";
import { app } from "../app";

describe("GET /api/products", () => {
  it("should return an array of products with all necessary data", async () => {
    const response = await request(app).get("/api/products");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data[0]).toHaveProperty("id");
    expect(response.body.data[0]).toHaveProperty("colors");
    expect(response.body.data[0]).toHaveProperty("sizes");
    expect(response.body.data[0]).toHaveProperty("name");
  });
  it("should return a product with all necessary data", async () => {
    const response = await request(app).get("/api/products/1");

    expect(response.status).toBe(200);
    expect(response.body.data).not.toBeNull();
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data).toHaveProperty("colors");
    expect(response.body.data).toHaveProperty("sizes");
    expect(response.body.data).toHaveProperty("name");
  });
});
