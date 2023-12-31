import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express";
import swaggerFile from './swagger.json';

import "./database"
import "./shared/conteiner"
import { router } from "./Routes";
import { AppError } from "./errors/AppError";

const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
 if (err instanceof AppError) {
  return response.status(err.statusCode).json({
   message: err.message
  })
 }
 return response.status(500).json({
  status: "error",
  message: `erro não catalogado no servidor - ${err.message}`
 })
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(3333, () => console.log('listening'));
