import express, { request } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05",
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "Usuario salvo com sucesso!",
  });
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
