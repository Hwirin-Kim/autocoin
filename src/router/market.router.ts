import { Router } from "express";
import { getMarketCodeController } from "../controller/marketController";

const marketRouter = Router();

// marketRouter.get("/test", () => {
//   console.log("market");
// });

marketRouter.get("/market-code", getMarketCodeController);

export default marketRouter;
