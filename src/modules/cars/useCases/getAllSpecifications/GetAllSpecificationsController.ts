import { Request, Response } from "express";

import { GetAllSpecificationsUseCase } from "./GetAllSpecificationsUseCase";

class GetAllSpecificationsController {
  constructor(
    private getAllSpecificationsUseCase: GetAllSpecificationsUseCase
  ) {}

  handle(req: Request, res: Response): Response {
    const getAllSpecifications = this.getAllSpecificationsUseCase.execute();

    return res.json(getAllSpecifications);
  }
}

export { GetAllSpecificationsController };
