import { requiredAdminMiddleware } from "./../../common/middleware";
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
router.get("/", requiredAdminMiddleware, renderDashboardController);
router.get("/login", renderLoginController);
router.post("/login", loginAdminController);
router.get("/code", requiredAdminMiddleware, renderCodeController);
router.get("/code/add", requiredAdminMiddleware, renderAddCodeController);
router.post("/code/add", requiredAdminMiddleware, handleAddCodeController);
router.post(
  "/code/delete/:id",
  requiredAdminMiddleware,
  handleDeleteCodeController,
);

router.get("/verify", requiredAdminMiddleware, renderVerifyController);
router.get(
  "/verify/add",
  requiredAdminMiddleware,
  renderAddCodeVerifyController,
);
router.post(
  "/verify/add",
  requiredAdminMiddleware,
  handleAddCodeVerifyController,
);
router.post(
  "/verify/delete/:id",
  requiredAdminMiddleware,
  handleDeleteVerifyController,
);
export default router;
