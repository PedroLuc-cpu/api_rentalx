import { Specificaction } from "../../entities/Specification";

interface ISpecificationDTO {
 name: string;
 description: string;
}

interface ISpecificationRepository {

 create({ name, description }: ISpecificationDTO): Promise<void>;
 list(): Promise<Specificaction[]>;
 findByName(name: string): Promise<Specificaction>;
}

export { ISpecificationRepository, ISpecificationDTO }