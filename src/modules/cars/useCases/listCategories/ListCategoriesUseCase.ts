import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";


class LisCategoriesUseCase {
 constructor(private categoriesRepository: ICategoriesRepository) { }

 execute(): Category[] {
  const categories = this.categoriesRepository.list()
  return categories
 }
}

export { LisCategoriesUseCase };