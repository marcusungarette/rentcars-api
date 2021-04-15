import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { GetAllCategoriesController } from "../modules/cars/useCases/getAllCategories/GetAllCategoriesController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

categoriesRoutes.get("/", getAllCategoriesController.handle);

export { categoriesRoutes };
