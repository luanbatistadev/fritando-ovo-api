import db from "../config/dbConect.js";
import Receita from '../models/receita.js';


// Discutindo sobre o uso de async/awaits

// estabelecendo e testando a conexão
db.on("error", console.log.bind(console, "Conexão com o banco falhou!"));
db.once("open", () => {
    console.log('Conexão com o banco estabelecida!')
});

await Receita.deleteMany();

//Deligando a conexão com o banco de dados com mensagem de sucesso ou de erro
db.close((err) => { err ? console.log(err) : console.log('Conexão com o banco encerrada!') });