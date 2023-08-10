import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { LisCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";
import multer from "multer";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController
const importCategoryController = new ImportCategoryController
const listCategoriesController = new LisCategoriesController

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", listCategoriesController.handle)

categoriesRoutes.post('/import', upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };