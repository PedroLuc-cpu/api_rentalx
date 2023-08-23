import { Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUsersRepository";
import { Users } from "../../entities/Users";
import { AppDataSource } from "../../../../database";


class UserRepository implements IUserRepository {

 private repository: Repository<Users>

 constructor() {
  this.repository = AppDataSource.getRepository(Users)
 }
 async findById(id: string): Promise<Users> {
  const user = await this.repository.findOne({ where: { id: id } })
  return user;
 }

 async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
  const user = this.repository.create({
   name,
   email,
   driver_license,
   password,
   isAdmin: false
  });

  await this.repository.save(user);

 }

 async findByEmail(email: string): Promise<Users> {
  const user = await this.repository.findOne({ where: { email: email } });
  return user;
 }
}


export { UserRepository }