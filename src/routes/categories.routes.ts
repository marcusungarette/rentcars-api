import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { getAllCategoriesController } from "../modules/cars/useCases/getAllCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return getAllCategoriesController.handle(req, res);
});

export { categoriesRoutes };
