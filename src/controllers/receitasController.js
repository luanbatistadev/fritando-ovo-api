import receitas from "../models/receita.js";


class ReceitasController {
  static listarReceitas = async (req, res) => {
    try {
      const page = req.query.page;
      let perPage = req.query.perPage;
      const options = { // limitar a quantidade máxima por requisição
        page: parseInt(page) || 1,
        limit: parseInt(perPage) > 10 ? 10 : parseInt(perPage) || 10
      }
      const receita = await receitas.paginate( options);
      return res.json(receita);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
    }
  }
  static pegarImagem = async (req, res) => {
    try {
      
    res.sendFile(sexo2);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
    }
  }

  // Cadastrar receitas POST
  static cadastrarImagem = async (req, res) => {
    try {
      
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
    }
  }

  // Cadastrar receitas POST
  static cadastrarReceitas = async (req, res) => {
    try {
      let receita = new receitas(req.body);
      await receita.save((err) => {
        if (err) {
          // console.log(err);
          return res.status(500).json({ error: true, code: 500, message: "Erro nos dados, confira e repita" })
        } else {
          console.log(req.files); //To see the multiple uploaded files

          res.status(201).send(receita.toJSON())
          
        }
      });

    } catch (err) {
      console.error(err);

      return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
    }
  }
  // Cadastrar receitas POST
  static cadastrarReceitas = async (req, res) => {
    try {
      let receita = new receitas(req.body);
      await receita.save((err) => {
        if (err) {
          // console.log(err);
          return res.status(500).json({ error: true, code: 500, message: "Erro nos dados, confira e repita" })
        } else {
          console.log(req.files); //To see the multiple uploaded files

          res.status(201).send(receita.toJSON())
          
        }
      });

    } catch (err) {
      console.error(err);

      return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
    }
  }



}
export default ReceitasController;