import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateUserCase } from "./CreateUserUseCase"

class CreateUserController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { name, email, password, driver_license } = request.body

  const createUserCase = container.resolve(CreateUserCase)
  await createUserCase.execute({ name, email, password, driver_license })

  return response.status(201).send()
 }
}

export { CreateUserController }