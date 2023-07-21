import { Request, Response } from "express";
import { LisCategoriesUseCase } from "./ListCategoriesUseCase";


class LisCategoriesController{
 constructor(private listCategoriesUseCase: LisCategoriesUseCase) { }

 handle(request:Request, response:Response):Response{
  const all = this.listCategoriesUseCase.execute()
  return response.json(all);
 }

}

export {LisCategoriesController};