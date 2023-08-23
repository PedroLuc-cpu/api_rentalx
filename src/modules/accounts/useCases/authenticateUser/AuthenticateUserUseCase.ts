import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
 email: string;
 password: string;
}

interface IResponse {
 user: {
  name: string;
  email: string;
 },
 token: string;
}

@injectable()
class AuthenticateUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRespository: IUserRepository

 ) { }

 async execute({ email, password }: IRequest): Promise<IResponse> {
  const user = await this.usersRespository.findByEmail(email);

  if (!user) {
   throw new AppError("Email or password incorrect");
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
   throw new AppError("Email or password incorrect");
  }

  const token = sign({}, "c10a1f8f263acdffbb48fe894fca4b43", {
   subject: user.id,
   expiresIn: "1d"
  })

  const tokenReturned: IResponse = {
   token,
   user: {
    name: user.name,
    email: user.email
   }
  }

  return tokenReturned;
 }
}

export { AuthenticateUserUseCase }