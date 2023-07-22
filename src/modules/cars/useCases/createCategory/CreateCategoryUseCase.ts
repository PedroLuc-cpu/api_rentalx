import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("Cato category already exists")
    }

    return this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }