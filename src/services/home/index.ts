import express from "express";
import {
  homeController,
  indexController,
  loginController,
} from "./home.controller";
const router = express.Router();
router.get("/", indexController);
router.get("/home.html", homeController);
router.get("/login.html", loginController);
export default router;
