import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import multer, { Multer } from "multer";

const categoriesRoutes = Router();

const upload = multer({
  dest:'./tmp',

})

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
})

categoriesRoutes.post('/import',upload.single("file"), (request, response) => {
  const {file} = request
  console.log(file);
  return response.send()
})

export { categoriesRoutes };