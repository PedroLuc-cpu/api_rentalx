import { AppDataSource } from "../../../database";
import { Specificaction } from "../entities/Specification";
import { ISpecificationDTO, ISpecificationRepository } from "./implementations/ISpecificationRepository";
import { Repository } from "typeorm";
class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specificaction>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specificaction)
  }

  async create({ name, description }: ISpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    });

    await this.repository.save(specification)
  }

  async list(): Promise<Specificaction[]> {
    const specification = await this.repository.find()
    return specification
  }

  async findByName(name: string): Promise<Specificaction> {
    const specification = this.repository.findOne({ where: { name } })
    return specification;
  }

}

export { SpecificationRepository }