import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const creatOrderValidation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const schema = Joi.object({
    productId: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    basePricAndColorId: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    materialId: Joi.alternatives().try(Joi.string(), Joi.number()).optional(),
    sizeId: Joi.alternatives().try(Joi.string(), Joi.number()).optional(),
    text: Joi.string().max(18).optional(),
  });

  const { error } = schema.validate(req.body);

  if (!error) {
    return next();
  }

  res.status(400).json({
    status: 400,
    data: {},
    message: error?.details[0]?.message || "Validation error",
  });
};
