import { Specificaction } from "../model/Specification";
import { ISpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specificaction[];

  constructor() {
    this.specifications = [];
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