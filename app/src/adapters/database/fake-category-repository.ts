import { Category } from "../../domain/entities/category";
import { CategoriesRepository } from "../../domain/usecases/ports/category-repository";

const categories: Category[] = [];
export class FakeCategoriesRepository implements CategoriesRepository {
  async create(category: Category): Promise<Category> {
    categories.push(category);
    return category;
  }
}
