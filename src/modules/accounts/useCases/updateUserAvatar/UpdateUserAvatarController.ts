import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";


class UpdateUserAvatarController {
 async handle(resquest: Request, response: Response): Promise<Response> {
  const { id } = resquest.user;
  const avatar_file = resquest.file.filename;

  const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

  await updateUserAvatarUseCase.execute({
   user_id:id,
   avatar_file
  })

  return response.status(204).send()
 }
}

export { UpdateUserAvatarController }