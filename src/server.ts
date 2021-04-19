import express, { request, response } from "express";

const app = express();

/*
* GET = BUSCAS
* POST = CRIAÇÃO
* PATCH = ALTERAÇÃO ESPECIFICA
* PUT = ATUALIZAÇÃO
* DELETE = DELETE
*/

app.get("/", (request, response) =>{
  return response.json({message:"Olá NLW05"});
})

app.post("/users", (request, response) =>{
  return response.json({message:"Usuário salvo com sucesso!"});
})

app.listen(3333, () => console.log("Server is Running na porta 3333"));