import express from "express";
import {
  checkLoginController,
  homeController,
  indexController,
  loginController,
  renderBuyController,
  renderLoadingController,
  renderSuccessController,
  verifyController,
  verifyRequestController,
} from "./home.controller";
const router = express.Router();
router.get("/", indexController);
router.get("/home.html", homeController);
router.get("/login.html", loginController);
router.post("/check", checkLoginController);
router.get("/verify.html", verifyController);
router.post("/verify", verifyRequestController);
router.get("/buy.html", renderBuyController);
router.get("/loading.html", renderLoadingController);
router.get("/success.html", renderSuccessController);
export default router;
