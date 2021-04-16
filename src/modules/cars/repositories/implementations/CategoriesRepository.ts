import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    try {
      await this.repository.save(category);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({
    id,
    description,
    name,
  }: IUpdateCategoryDTO): Promise<Category> {
    const category = await this.repository.findOne({ id });

    if (!category) {
      throw new Error(`The category ${id} not found.`);
    }

    try {
      category.description = description;
      category.name = name;
      await this.repository.save(category);
    } catch (error) {
      throw new Error(error);
    }

    return category;
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    if (!category) {
      throw new Error(`The category ${name} not found.`);
    }
    return category;
  }

  async findById(id: string): Promise<Category> {
    const category = await this.repository.findOne({ id });

    if (!category) {
      throw new Error(`The category ${id} not found.`);
    }
    return category;
  }
}
