import express from "express";
import receitas from "./receitasRoutes.js";

const routes = (app) => {
    app.route('/').get((rep, res) => {
        res.status(200).redirect("/docs") // redirecionando para documentação
    })

    app.use(
        express.json(),
        receitas,
    )
}

export default routes