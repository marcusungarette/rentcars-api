import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return res
    .status(201)
    .send({ success: "Specification successfully created" });
});

specificationsRoutes.get("/", (req, res) => {
  const getAllSpecifications = specificationsRepository.getAll();

  return res.json(getAllSpecifications);
});

export { specificationsRoutes };
