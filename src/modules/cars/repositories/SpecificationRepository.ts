import { Specificaction } from "../model/Specification";
import { ISpecificationDTO, ISpecificationRepository } from "./implementations/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specificaction[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specificaction();

    Object.assign(specification,
      {
        name,
        description,
        created_at: new Date()
      });

    this.specifications.push(specification)
  }
  list(): Specificaction[] {
    return this.specifications;
  }

  findByName(name: string): Specificaction {
    const specification = this.specifications.find(specification => specification.name === name)
    return specification;
  }

}

export { SpecificationRepository }