import { codeModel } from "./../../models/code.model";
import { codeVerifyModel } from "./../../models/code-verify.model";
export class AdminService {
  public static addCode(code: string) {
    return codeModel.create({ code });
  }
  public static listCode() {
    return codeModel.find().sort({ createdAt: -1 });
  }

  public static deleteCode(code: string) {
    return codeModel.findByIdAndDelete(code);
  }
  public static listVerify() {
    return codeVerifyModel.find().sort({ createdAt: -1 });
  }
  public static addCodeVerify(code: string) {
    return codeVerifyModel.create({ code });
  }

  public static deleteVerify(code: string) {
    return codeVerifyModel.findByIdAndDelete(code);
  }
}
