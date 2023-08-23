import { AppError } from "../../../../errors/AppError";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private SpecificationRepository: ISpecificationRepository) { }
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.SpecificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("(CreateSpecificationUseCase) - Cato category already exists");
    }

    return this.SpecificationRepository.create({ name, description })

  }
}

export { CreateSpecificationUseCase };