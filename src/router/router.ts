import { Router } from "express";
import marketRouter from "./market.router";

const router = Router();

router.use("/market", marketRouter);

export default router;
