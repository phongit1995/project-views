import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server running on port : " + PORT);
});
