import { AdminService } from "./admin.service";
export const renderLoginController = (req, res) => {
  res.render("admin/login");
};
export const loginAdminController = (req, res) => {
  const { email, password } = req.body;
  if (email != "admin@gmail.com" || password != "123456") {
    return res.redirect("/admin/login");
  }
  return res.redirect("/admin");
};
export const renderDashboardController = (req, res) => {
  res.render("admin/index");
};

export const renderCodeController = async (req, res) => {
  const listCode = await AdminService.listCode();
  console.log(listCode);
  res.render("admin/code", { listCode });
};
export const renderAddCodeController = async (req, res) => {
  res.render("admin/add-code");
};
export const handleAddCodeController = async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.redirect("/admin/code/add");
  }
  await AdminService.addCode(code);
  return res.redirect("/admin/code");
};
export const handleDeleteCodeController = async (req, res) => {
  const id = req.params.id;
  try {
    await AdminService.deleteCode(id);
    return res.redirect("/admin/code");
  } catch (error) {
    return res.redirect("/admin/code");
  }
};
export const renderVerifyController = async (req, res) => {
  const listCodeVerify = await AdminService.listVerify();
  console.log(listCodeVerify);
  res.render("admin/verify", { listCodeVerify });
};

export const renderAddCodeVerifyController = async (req, res) => {
  res.render("admin/add-verify");
};

export const handleAddCodeVerifyController = async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.redirect("/admin/verify/add");
  }
  await AdminService.addCodeVerify(code);
  return res.redirect("/admin/verify");
};
