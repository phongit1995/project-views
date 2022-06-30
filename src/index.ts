import express from "express";
import dotenv from "dotenv";
import path from "path";
import services from "./services";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(services);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server running on port : " + PORT);
});
