import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { Users } from "../entities/Users";

interface IUserRepository {
 create(data: ICreateUserDTO): Promise<void>
 findByEmail(email: string): Promise<Users>
}

export { IUserRepository }