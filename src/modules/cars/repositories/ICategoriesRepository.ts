import { Category } from "../infra/typeorm/entities/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface IUpdateCategoryDTO {
  id: string;
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findById(id: string): Promise<Category>;
  findByName(name: string): Promise<Category>;
  getAll(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  update({ id, name, description }: IUpdateCategoryDTO): Promise<Category>;
}
