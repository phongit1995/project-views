import express from "express";
import { homeController, loginController } from "./home.controller";
const router = express.Router();
router.get("/home.html", homeController);
router.get("/login.html", loginController);
export default router;
