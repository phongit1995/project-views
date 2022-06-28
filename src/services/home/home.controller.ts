import { Response } from "express";

export const homeController = (req, res: Response, next) => {
  res.render("home");
};
export const loginController = (req, res: Response, next) => {
  res.render("login");
};
