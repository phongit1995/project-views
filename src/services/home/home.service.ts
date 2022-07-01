import { codeModel } from "./../../models/code.model";
export class HomeService {
  public static getListCode() {
    return codeModel.find();
  }
  public static getCodeByName(code: string) {
    return codeModel.findOne({ code });
  }
  public static createCode(code) {
    return codeModel.create({ code });
  }
}
