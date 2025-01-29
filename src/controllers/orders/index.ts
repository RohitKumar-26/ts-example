import { Request, Response } from "express";

let orders: Order[] = [];

const createAnOrder = async (req: Request, res: Response) => {
 
  return res.status(200).json({ data: "newOrder" });
};

const getAllOrders = async (req: Request, res: Response) => {

  return res.status(200).json({ data: "ordersData" });
};
export { createAnOrder, getAllOrders };
