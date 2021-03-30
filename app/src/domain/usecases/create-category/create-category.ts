import { Either, left, right } from "../../../shared/either";
import { Category, CategoryData } from "../../entities/category";
import { InvalidNameError } from "../../entities/category/errors/invalid-name";
import { CategoriesRepository } from "../ports/category-repository";
import { CategoryResponse } from "./category-response";

export class CreateCategory {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(categoryData: CategoryData): Promise<CategoryResponse> {
    const categoryOrError: Either<InvalidNameError, Category> = Category.create(
      categoryData
    );

    if (categoryOrError.isLeft()) {
      return left(categoryOrError.value);
    }

    const category: Category = categoryOrError.value;
    await this.categoriesRepository.create(category);

    return right(category);
  }
}
