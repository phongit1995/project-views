import express from "express";
import dotenv from "dotenv";
import path from "path";
import services from "./services";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import session from "express-session";
dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.set("trust proxy", 1);
app.set("views", path.join(__dirname, "views"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    resave: true,
    secret: "adnw@adwnCaikawnd3132",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 }, //1 hour
  }),
);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connect mongodb success");
    console.log(process.env.MONGO_URL);
  })
  .catch((error: any) => {
    console.log("connect mongodb fail : ", error);
  });
app.use(services);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server running on port : " + PORT);
});
