import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("Conectado no banco de dados com sucesso!");
  } catch (e) {
    console.log("Não foi pssível conectar. Erro: " + e);
  }
}

export default connect;
