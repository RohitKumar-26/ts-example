import { Router } from "express";
import { catchAsyncAction } from "../../utils";
import { getParticularProduct, getProducts } from "../../controllers";

const productsRouter: Router = Router();

productsRouter.get("/:id", catchAsyncAction(getParticularProduct));
productsRouter.get("/", catchAsyncAction(getProducts));

export default productsRouter;
