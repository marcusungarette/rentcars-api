import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { GetAllCategoriesController } from "./GetAllCategoriesController";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

export default (): GetAllCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(
    categoriesRepository
  );
  const getAllCategoriesController = new GetAllCategoriesController(
    getAllCategoriesUseCase
  );
  return getAllCategoriesController;
};
