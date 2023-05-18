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
      const aluno = await prismaClient.aluno.findMany({});
      return response.json(aluno);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
  }
}

export class DeleteAlunoController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    try {
      const aluno = await prismaClient.aluno.delete({
        where : {
          id: id
        }
      });
      return response.json(aluno);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
  }
}
