import { Specificaction } from "../../model/Specification";

interface ISpecificationDTO {
 name: string;
 description: string;
}

interface ISpecificationRepository {

 create({ name, description }: ISpecificationDTO): void;
 list(): Specificaction[];
 findByName(name: string): Specificaction;
}

export { ISpecificationRepository, ISpecificationDTO }