import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { router } from "./routes";

if (process.env.NODE_ENV === "dev") {
  console.log("Development");
  dotenv.config({
    path: path.normalize("./.env.dev"),
  });
} else {
  dotenv.config();
}
const app = express();
app.use("/public", express.static(path.resolve("public")));

app.use(cors());
app.use("/api", router);
export { app };
