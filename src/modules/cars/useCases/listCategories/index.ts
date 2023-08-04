import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { LisCategoriesController } from "./ListCategoriesController";
import { LisCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository;
const listCategoriesUseCase = new LisCategoriesUseCase(categoriesRepository)
const listCategoriesController = new LisCategoriesController(listCategoriesUseCase)

export { listCategoriesController }