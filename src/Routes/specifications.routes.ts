import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateCategoryServices } from "../modules/cars/services/CreateSpecificationServices"

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository()

specificationRoutes.post('/', (request, response) => {
 const { name, description } = request.body;
 const createSpecificationServices = new CreateCategoryServices(specificationRepository);
 createSpecificationServices.execute({ name, description });
 return response.status(201).send();

})

specificationRoutes.get('/', (request, response) => {
 const all = specificationRepository.list();
 response.json(all);
})

export {specificationRoutes};