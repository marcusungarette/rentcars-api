import { Request, Response } from "express";

import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

class GetAllCategoriesController {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const getAllCategories = await this.getAllCategoriesUseCase.execute();

    return res.json(getAllCategories);
  }
}

export { GetAllCategoriesController };
