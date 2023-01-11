require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db"
import mongoose from "mongoose";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();
mongoose.set('strictQuery', false);
const port = config.get<number>("port");
//configura express com json
app.use(express.json());

app.use(morganMiddleware);

//configura rota padrão
app.use("/api/", router);

app.listen(port, async () => {
  await db();
  Logger.info("Aplicação em execuçao na porta: "+port)
});
