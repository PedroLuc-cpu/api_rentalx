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
    private specificationRepository: ISpecificationRepository) { }
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase };