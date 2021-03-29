import { Controller } from "../../adapters/presentation/contracts";
import { CategoriesController } from "../../adapters/presentation/controllers/category-controller";
import { FakeCategoriesRepository } from "../../adapters/database/fake-category-repository";
import { CreateCategory } from "../../domain/usecases/create-category/create-category";

export const makeCategoriesController = (): Controller => {
  const repo = new FakeCategoriesRepository();
  const createCategory = new CreateCategory(repo);
  return new CategoriesController(createCategory);
};
