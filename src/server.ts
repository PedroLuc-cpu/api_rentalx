import express from "express"
import swaggerUi from "swagger-ui-express";
import swaggerFile from './swagger.json';

import "./database"

import { categoriesRoutes } from "./Routes/categories.routes";
import { specificationRoutes } from "./Routes/specifications.routes";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/categories", categoriesRoutes);
//app.use("/categoriesAll", categoriesRoutes);

//specifications
app.use("/specifications", specificationRoutes);
app.use("/specificationsAll", specificationRoutes);

app.listen(3333, () => console.log('listening'));
