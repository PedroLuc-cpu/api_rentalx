import { Request, Response } from "express";
import { LisCategoriesUseCase } from "./ListCategoriesUseCase";


class LisCategoriesController{
 constructor(private listCategoriesUseCase: LisCategoriesUseCase) { }

 async handle(request: Request, response: Response): Promise<Response>{
  const all = await  this.listCategoriesUseCase.execute()
  return response.json(all);
 }

}

export {LisCategoriesController};