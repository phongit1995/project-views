export const requiredAdminMiddleware = (req, res, next) => {
  console.log(req.session.adminLogin);
  if (req.session.adminLogin) return next();
  return res.redirect("/admin/login");
};
