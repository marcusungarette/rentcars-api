import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { GetAllSpecificationsController } from "./GetAllSpecificationsController";
import { GetAllSpecificationsUseCase } from "./GetAllSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const getAllSpecificationsUseCase = new GetAllSpecificationsUseCase(
  specificationsRepository
);
const getAllSpecificationsController = new GetAllSpecificationsController(
  getAllSpecificationsUseCase
);

export { getAllSpecificationsController };
