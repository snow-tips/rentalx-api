import { CategoryData } from "../../domain/entities/category/category-data";
import { CategoriesRepository } from "../../domain/usecases/ports/category-repository";

const categories: CategoryData[] = [];
export class FakeCategoriesRepository implements CategoriesRepository {
  async create(categoryData: CategoryData): Promise<void> {
    categories.push(categoryData);
  }
}
