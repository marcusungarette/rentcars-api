import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

class GetAllCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllCategoriesUseCase = container.resolve(GetAllCategoriesUseCase);

    const all = await getAllCategoriesUseCase.execute();

    return res.json(all);
  }
}

export { GetAllCategoriesController };
