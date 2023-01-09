require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db"
import mongoose from "mongoose";

const app = express();
mongoose.set('strictQuery', false);
const port = config.get<number>("port");
//configura express com json
app.use(express.json());
//configura rota padrão
app.use("/api/", router);

app.listen(port, async () => {
  await db();
  console.log("A aplicação esta funionando na porta 3000!");
});
