import { Category } from "../../../domain/entities/category";

export class CategoryViewModel {
  static map({ name, description }: Category): CategoryViewModel {
    return {
      name: name.value,
      description,
    };
  }

  static mapCollection(entities: Category[]): CategoryViewModel[] {
    return entities.map((entity) => CategoryViewModel.map(entity));
  }
}
