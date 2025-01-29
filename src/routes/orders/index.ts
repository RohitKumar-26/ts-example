import { Router } from "express";
import { catchAsyncAction, creatOrderValidation, uploadImage } from "../../utils";
import { createAnOrder, getAllOrders } from "../../controllers";

const ordersRouter: Router = Router();

ordersRouter.post("/", uploadImage,creatOrderValidation, catchAsyncAction(createAnOrder));
ordersRouter.get("/", catchAsyncAction(getAllOrders));

export default ordersRouter;
