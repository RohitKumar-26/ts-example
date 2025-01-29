import { Router } from "express";
import ordersRouter from "./orders";
import productsRouter from "./products";

const router: Router = Router();

router.use("/orders", ordersRouter);
router.use("/products", productsRouter);

export { router };
