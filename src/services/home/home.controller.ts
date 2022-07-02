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
  console.log(req.body);
  const { code, platform } = req.body;
  if (!code) {
    return res.status(403).json({ message: "Vui lòng nhập mã phần mềm" });
  }
  const codeData = await HomeService.getCodeByName(code);
  if (!codeData) {
    return res.status(403).json({ message: "Bạn đã nhập sai mã phần mềm" });
  }
  return res.json({
    url: `/verify.html?apps=${platform}`,
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
export const verifyRequestController = (req: Request, res: Response) => {
  res.render("verify");
};
