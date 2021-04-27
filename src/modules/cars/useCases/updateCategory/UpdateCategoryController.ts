import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;
    const { id } = req.params;

    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

    await updateCategoryUseCase.execute({ id, name, description });

    return res.status(200).send({ success: "Category successfully updated" });
  }
}

export { UpdateCategoryController };
