import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";
import { AppError } from "../errors/AppError";

interface IPayload {
 sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

 const authHeader = request.headers.authorization;

 if (!authHeader) {
  throw new AppError("Token missing" , 401)
 }

 //Bearer authentication

 const [, token] = authHeader.split(" ")

 try {
  const { sub: user_id } = verify(token, "c10a1f8f263acdffbb48fe894fca4b43") as IPayload;

  const usersRespositoty = new UserRepository()
  const users = await usersRespositoty.findById(user_id);

  if (!users) {
   throw new AppError("User does not exist!", 401);
  }

  next();
 } catch (error) {
  throw new AppError("Invalid token", 401)
 }
}