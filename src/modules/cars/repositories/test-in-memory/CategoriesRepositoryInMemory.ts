import { Category } from "../../infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const findByNameCategory = this.categories.find(
      (category) => category.name === name
    );
    return findByNameCategory;
  }

  async getAll(): Promise<Category[]> {
    const getAllCatogories = this.categories;
    return getAllCatogories;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });
    this.categories.push(category);
  }

  async findById(id: string): Promise<Category> {
    const findByIdCategory = this.categories.find(
      (category) => category.id === id
    );
    return findByIdCategory;
  }

  async update({
    id,
    description,
    name,
  }: IUpdateCategoryDTO): Promise<Category> {
    const categoryUpdated = this.categories.find(
      (category) => category.id === id
    );

    categoryUpdated.description = description;
    categoryUpdated.name = name;

    return categoryUpdated;
  }
}

export { CategoriesRepositoryInMemory };
