import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.json(200, {
    result: "Phong",
  });
});
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server running on port : " + PORT);
});
