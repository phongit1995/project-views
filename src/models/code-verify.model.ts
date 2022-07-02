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
export const codeVerifyModel = model<CodeVerify>(
  "code-verify",
  codeVerifyScheme,
);
