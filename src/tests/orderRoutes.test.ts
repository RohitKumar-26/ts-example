import request from "supertest";
import { app } from "../app";


describe("POST /api/orders", () => {
  it("should create a new order with valid data and file", async () => {
    const response = await request(app)
      .post("/api/orders")
      .field("productId", "1")
      .field("basePricAndColorId", "1")
      .field("materialId", "1")
      .field("sizeId", "1")
      .field("text", "Custom Text")
      .set("Content-Type", "multipart/form-data");

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data).toHaveProperty("productId", "1");
    expect(response.body.data).toHaveProperty("materialId", "1");
    expect(response.body.data).toHaveProperty("sizeId", "1");
    expect(response.body.data).toHaveProperty("text", "Custom Text");
    expect(response.body.data).toHaveProperty("totalPrice", 21.95);
  });

  it("should return 400 for invalid product ID", async () => {
    const response = await request(app)
      .post("/api/orders")
      .field("productId", "999")
      .field("basePricAndColorId", "1")
      .field("materialId", "1")
      .field("sizeId", "1")
      .field("text", "Custom Text")
      .set("Content-Type", "multipart/form-data");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid product ID");
  });
});


describe("GET /api/orders", () => {
  it("should return an array of orders with all necessary data", async () => {
    const response = await request(app).get("/api/orders");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data[0]).toHaveProperty("id");
    expect(response.body.data[0]).toHaveProperty("size");
    expect(response.body.data[0]).toHaveProperty("material");
    expect(response.body.data[0]).toHaveProperty("product");
    expect(response.body.data[0]).toHaveProperty("basePricAndColor");
  });
 
});