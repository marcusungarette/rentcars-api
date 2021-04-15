import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class GetAllCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.getAll();

    return categories;
  }
}

export { GetAllCategoriesUseCase };
