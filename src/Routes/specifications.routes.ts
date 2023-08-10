import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
const createSpecificationController = new CreateSpecificationController;


const specificationRoutes = Router();

specificationRoutes.post('/', createSpecificationController.handle)

export { specificationRoutes };