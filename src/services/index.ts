import express from "express";
import HomeRouter from "./home";
import AdminRouter from "./admin/admin.router";
const router = express.Router();

router.use("/", HomeRouter);
router.use("/admin", AdminRouter);
export default router;
