import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  id: string;
  name: string;
  description: string;
}
@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ id, name, description }: IRequest): Promise<Category> {
    const checkIfNameAlreadyExists = await this.categoriesRepository.findById(
      id
    );
    if (checkIfNameAlreadyExists.name === name) {
      throw new Error(`Category name ${name} already exists!`);
    }
    await this.categoriesRepository.update({ id, name, description });

    return checkIfNameAlreadyExists;
  }
}

export { UpdateCategoryUseCase };
