import { Schema, model } from "mongoose";
export interface Code {
  code: string;
}
export const codeScheme = new Schema(
  {
    code: String,
  },
  { timestamps: true },
);
export const codeModel = model<Code>("code", codeScheme);
