import express from "express";
import {
  checkLoginController,
  homeController,
  indexController,
  loginController,
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
export default router;
