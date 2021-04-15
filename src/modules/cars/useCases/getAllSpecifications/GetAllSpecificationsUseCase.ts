import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class GetAllSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    const specifications = this.specificationsRepository.getAll();

    return specifications;
  }
}

export { GetAllSpecificationsUseCase };
