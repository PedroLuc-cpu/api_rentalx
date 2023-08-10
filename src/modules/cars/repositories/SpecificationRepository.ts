import { AppDataSource } from "../../../database";
import { Specificaction } from "../entities/Specification";
import { ISpecificationDTO, ISpecificationRepository } from "./implementations/ISpecificationRepository";
import { Repository } from "typeorm";
class SpecificationRepository implements ISpecificationRepository {
  private specifications: Repository<Specificaction>;

  constructor() {
    this.specifications = AppDataSource.getRepository(Specificaction)
  }

  async create({ name, description }: ISpecificationDTO): Promise<void> {
    const specification = this.specifications.create({
      description,
      name
    });

    await this.specifications.save(specification)
  }

  async list(): Promise<Specificaction[]> {
    const specification = await this.specifications.find()
    return specification
  }

  async findByName(name: string): Promise<Specificaction> {
    const specification = this.specifications.findOne({ where: { name } })
    return specification;
  }

}

export { SpecificationRepository }