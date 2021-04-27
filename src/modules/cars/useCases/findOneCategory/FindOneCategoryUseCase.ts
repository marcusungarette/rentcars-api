import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  id: string;
}
@injectable()
class FindOneCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ id }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    return category;
  }
}

export { FindOneCategoriesUseCase };
