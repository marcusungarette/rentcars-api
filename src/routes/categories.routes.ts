import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import getAllCategoriesController from "../modules/cars/useCases/getAllCategories";
import importCategoryController from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return getAllCategoriesController().handle(req, res);
});

export { categoriesRoutes };
