import { Request, Response } from "express";
import { ListImage } from "./home.constant";

export const indexController = (req, res: Response) => {
  res.render("home");
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

export const checkLoginController = (req: Request, res: Response) => {
  console.log(req.body);
  const { code } = req.body;
  if (code != "123213") {
    res.status(403).json({ message: "Bạn đã nhập sai mã phần mềm" });
  }
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
