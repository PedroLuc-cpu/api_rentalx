import { Request, Response } from "express";
import { LisCategoriesUseCase } from "./ListCategoriesUseCase";
import { container } from "tsyringe";


class LisCategoriesController{
 async handle(request: Request, response: Response): Promise<Response>{

  const listCategoriesUseCase = container.resolve(LisCategoriesUseCase)

  const all = await  listCategoriesUseCase.execute()
  return response.json(all);
 }

}

export {LisCategoriesController};