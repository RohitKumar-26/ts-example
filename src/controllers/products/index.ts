import { Request, Response } from "express";

const getProducts = async (req: Request, res: Response) => {
  return res.status(200).json({ status: 200, data: "products" });
};

const getParticularProduct = async (req: Request, res: Response) => {
  return res.status(200).json({ status: 200, data: "" });
};

export { getProducts, getParticularProduct };
