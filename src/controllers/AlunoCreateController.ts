import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateAlunoController {
  async handle(request: Request, response: Response) {
    const { nome } = request.body;
    try {
      const aluno = await prismaClient.aluno.create({
        data: {
          nome,
        },
      });
      return response.json(aluno);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
  }
}

export class FindAlunoController {
  async handle(request: Request, response: Response) {
    //const { nome } = request.body;
    try {
      const aluno = await prismaClient.aluno.findMany({
        where: {
          nome: "Mikael"
        }
      });
      return response.json(aluno);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
  }
}
