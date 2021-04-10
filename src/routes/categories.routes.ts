import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ erro: "Category already exists" });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).send({ success: "Category successfully created" });
});

categoriesRoutes.get("/", (req, res) => {
  const getAllCategories = categoriesRepository.getAll();

  return res.json(getAllCategories);
});

export { categoriesRoutes };
