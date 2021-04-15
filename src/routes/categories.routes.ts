import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import getAllCategoriesController from "../modules/cars/useCases/getAllCategories";
import importCategoryController from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController().handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return getAllCategoriesController().handle(req, res);
});

export { categoriesRoutes };
