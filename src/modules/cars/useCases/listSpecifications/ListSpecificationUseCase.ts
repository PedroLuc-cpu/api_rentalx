import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
 constructor(
  @inject("CategoriesRepository")
  private categoriesRepository: ISpecificationRepository) { }

 async execute(): Promise<Category[]> {
  const categories = await this.categoriesRepository.list()
  return categories
 }
}

export { ListSpecificationUseCase };