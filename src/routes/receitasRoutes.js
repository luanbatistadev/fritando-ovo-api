import express from "express";
import receitasController from "../controllers/receitasController.js";
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router
  .get("/receitas", receitasController.listarReceitas)
  .post("/receitas",  receitasController.cadastrarReceitas)

export default router;