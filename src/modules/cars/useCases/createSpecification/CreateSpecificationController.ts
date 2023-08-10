import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

class CreateSpecificationController {
 handle(request: Request, response: Response): Response {
  const { name, description } = request.body;

  const createSpecificationUse = container.resolve(CreateSpecificationUseCase)

  createSpecificationUse.execute({ name, description });
  return response.status(201).send();
 }
}

export { CreateSpecificationController }