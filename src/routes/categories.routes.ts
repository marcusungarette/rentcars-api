import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send({ success: "Category successfully created" });
});

categoriesRoutes.get("/", (req, res) => {
  const getAllCategories = categoriesRepository.getAll();

  return res.json(getAllCategories);
});

export { categoriesRoutes };
