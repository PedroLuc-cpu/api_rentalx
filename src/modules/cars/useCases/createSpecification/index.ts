import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createCategoryUseCase = new CreateSpecificationUseCase(specificationRepository);
const createCategoryController = new CreateSpecificationController(createCategoryUseCase)

export { createCategoryController }