import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOneCategoriesUseCase } from "./FindOneCategoryUseCase";

class FindOneCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const findOneCategoriesUseCase = container.resolve(
      FindOneCategoriesUseCase
    );

    const findone = await findOneCategoriesUseCase.execute({ id });

    return res.json(findone);
  }
}

export { FindOneCategoriesController };
