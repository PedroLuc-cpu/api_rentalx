import express from "express"
import swaggerUi from "swagger-ui-express";
import swaggerFile from './swagger.json';

import "./database"
import "./shared/conteiner"
import { router } from "./Routes";

const app = express();
app.use(express.json());
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.listen(3333, () => console.log('listening'));
