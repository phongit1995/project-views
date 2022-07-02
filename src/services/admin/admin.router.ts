import express from "express";
import {
  handleAddCodeController,
  handleAddCodeVerifyController,
  handleDeleteCodeController,
  handleDeleteVerifyController,
  loginAdminController,
  renderAddCodeController,
  renderAddCodeVerifyController,
  renderCodeController,
  renderDashboardController,
  renderLoginController,
  renderVerifyController,
} from "./admin.controller";
const router = express.Router();
router.get("/", renderDashboardController);
router.get("/login", renderLoginController);
router.post("/login", loginAdminController);
router.get("/code", renderCodeController);
router.get("/code/add", renderAddCodeController);
router.post("/code/add", handleAddCodeController);
router.post("/code/delete/:id", handleDeleteCodeController);

router.get("/verify", renderVerifyController);
router.get("/verify/add", renderAddCodeVerifyController);
router.post("/verify/add", handleAddCodeVerifyController);
router.post("/verify/delete/:id", handleDeleteVerifyController);
export default router;
