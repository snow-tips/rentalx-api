import { CategoryData } from "../../entities/category/category-data";

export interface CategoriesRepository {
  create: (category: CategoryData) => Promise<void>;
}
