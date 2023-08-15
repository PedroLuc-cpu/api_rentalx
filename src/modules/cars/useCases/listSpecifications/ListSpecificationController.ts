import { Request, Response } from "express";
import { container } from "tsyringe";
import { LisCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";


class ListSpecificationController {
 async handle(request: Request, response: Response): Promise<Response> {

  const listCategoriesUseCase = container.resolve(LisCategoriesUseCase)

  const all = await listCategoriesUseCase.execute()
  return response.json(all);
 }

}

export { ListSpecificationController };