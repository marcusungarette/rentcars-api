class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log("useCase", file);
  }
}

export { ImportCategoryUseCase };
