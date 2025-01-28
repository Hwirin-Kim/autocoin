import { NextFunction, Request, Response } from "express";
import { getMarketCode } from "../api/market";

export const getMarketCodeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getMarketCode();
    return res.status(200).json({
      message: "success",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
