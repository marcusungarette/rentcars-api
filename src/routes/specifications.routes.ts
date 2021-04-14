import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { getAllSpecificationsController } from "../modules/cars/useCases/getAllSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationsRoutes.get("/", (req, res) => {
  return getAllSpecificationsController.handle(req, res);
});

export { specificationsRoutes };
