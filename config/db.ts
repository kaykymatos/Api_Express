import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectado no banco de dados com sucesso!");
  } catch (e) {
    Logger.error("Não foi pssível conectar. Erro: " + e);
    process.exit(1)
  }
}

export default connect;
