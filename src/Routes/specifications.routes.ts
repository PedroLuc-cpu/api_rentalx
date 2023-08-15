import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecifications/ListSpecificationController";

const createSpecificationController = new CreateSpecificationController;
const listCategoriesController = new ListSpecificationController;


const specificationRoutes = Router();

specificationRoutes.post('/', createSpecificationController.handle)
specificationRoutes.get("/", listCategoriesController.handle)


export { specificationRoutes };