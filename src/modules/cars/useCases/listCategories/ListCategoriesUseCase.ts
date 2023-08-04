import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";


class LisCategoriesUseCase {
 constructor(private categoriesRepository: ICategoriesRepository) { }

async execute(): Promise<Category[]> {
  const categories = await this.categoriesRepository.list()
  return categories
 }
}

export { LisCategoriesUseCase };