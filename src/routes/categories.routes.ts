import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { FindOneCategoriesController } from "../modules/cars/useCases/findOneCategory/FindOneCategoryController";
import { GetAllCategoriesController } from "../modules/cars/useCases/getAllCategories/GetAllCategoriesController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { UpdateCategoryController } from "../modules/cars/useCases/updateCategory/UpdateCategoryController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const findOneCategoriesController = new FindOneCategoriesController();
const updateCategoryController = new UpdateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

categoriesRoutes.get("/", getAllCategoriesController.handle);
categoriesRoutes.get("/:id", findOneCategoriesController.handle);
categoriesRoutes.put("/:id", updateCategoryController.handle);

export { categoriesRoutes };
