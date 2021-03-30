import { Category } from "../../../domain/entities/category";

export class CategoryViewModel {
  static map({ id, name, description }: Category): CategoryViewModel {
    return {
      id: id.value,
      name: name.value,
      description,
    };
  }

  static mapCollection(entities: Category[]): CategoryViewModel[] {
    return entities.map((entity) => CategoryViewModel.map(entity));
  }
}
