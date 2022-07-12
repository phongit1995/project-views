import { Request, Response } from "express";
import { ListImage } from "./home.constant";
import { HomeService } from "./home.service";

export const indexController = (req, res: Response) => {
  console.log("Phong");
  return res.render("home");
};
export const homeController = (req, res: Response) => {
  res.render("home");
};
export const loginController = (req: Request, res: Response) => {
  const apps = req.query.apps;
  const checkAppsExits = Object.keys(ListImage).find((item) => item == apps);
  if (!checkAppsExits) {
    return res.redirect("/");
  }
  res.render("login", {
    app: { ...ListImage[checkAppsExits], platform: apps },
  });
};

export const checkLoginController = async (req: Request, res: Response) => {
  const { code, platform } = req.body;
  if (!code) {
    return res.status(403).json({ message: "Vui lòng nhập mã phần mềm" });
  }
  const codeData: any = await HomeService.getCodeByName(code);
  if (!codeData) {
    return res.status(403).json({ message: "Bạn đã nhập sai mã phần mềm" });
  }
  return res.json({
    url: `/verify.html?apps=${platform}`,
    toZalo: codeData.toZalo,
  });
};

export const verifyController = (req: Request, res: Response) => {
  const apps = req.query.apps;
  const checkAppsExits = Object.keys(ListImage).find((item) => item == apps);
  if (!checkAppsExits) {
    return res.redirect("/");
  }
  res.render("verify", {
    app: { ...ListImage[checkAppsExits], platform: apps },
  });
};
export const verifyRequestController = async (req: Request, res: Response) => {
  const { code, platform } = req.body;
  console.log(req.body);
  if (!code) {
    return res.status(403).json({ message: "Vui lòng nhập mã xác thực" });
  }
  const codeVerify = await HomeService.getCodeVerifyByName(code);
  if (!codeVerify) {
    return res.status(403).json({ message: "Bạn đã nhập sai mã xác thực" });
  }
  return res.json({
    url: `/buy.html`,
  });
};

export const renderBuyController = (req: Request, res: Response) => {
  res.render("buy");
};

export const renderLoadingController = (req: Request, res: Response) => {
  res.render("loading");
};
export const renderSuccessController = (req: Request, res: Response) => {
  res.render("success");
};
