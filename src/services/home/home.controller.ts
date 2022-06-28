import { Response } from "express";

export const indexController = (req, res: Response, next) => {
  res.json({ message: "success" });
};
export const homeController = (req, res: Response, next) => {
  res.render("home");
};
export const loginController = (req, res: Response, next) => {
  res.render("login");
};
