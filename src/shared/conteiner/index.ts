import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/implementations/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/implementations/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";

container.registerSingleton<ICategoriesRepository>(
 "CategoriesRepository",
 CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
 "SpecificationRepository",
 SpecificationRepository,
)


container.registerSingleton<IUserRepository>(
 "UsersRepository",
 UserRepository,
)