import { Schema, model } from "mongoose";
export interface CodeVerify {
  code: string;
}
export const codeVerifyScheme = new Schema(
  {
    code: String,
  },
  { timestamps: true },
);
export const codeModel = model<CodeVerify>("code", codeVerifyScheme);
