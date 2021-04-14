import { Request, Response } from "express";

import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

class GetAllCategoriesController {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const getAllCategories = this.getAllCategoriesUseCase.execute();

    return res.json(getAllCategories);
  }
}

export { GetAllCategoriesController };
