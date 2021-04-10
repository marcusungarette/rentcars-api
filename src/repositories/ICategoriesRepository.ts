import { Category } from "../model/category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Category;
  getAll(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}