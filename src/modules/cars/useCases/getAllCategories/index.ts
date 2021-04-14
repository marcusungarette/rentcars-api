import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { GetAllCategoriesController } from "./GetAllCategoriesController";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const getAllCategoriesUseCase = new GetAllCategoriesUseCase(
  categoriesRepository
);
const getAllCategoriesController = new GetAllCategoriesController(
  getAllCategoriesUseCase
);

export { getAllCategoriesController };
