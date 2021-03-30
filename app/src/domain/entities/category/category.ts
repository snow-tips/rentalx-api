import { Either, left, right } from "../../../shared/either";
import { Entity } from "../types/entity";
import { CategoryData } from "./category-data";
import { CategoryId } from "./category-id";
import { InvalidNameError } from "./errors/invalid-name";
import { Name } from "./name";

export class Category implements Entity<string> {
  public readonly id: CategoryId;
  public readonly name: Name;
  public readonly description: string;

  private constructor(categoryId: CategoryId, name: Name, description: string) {
    this.id = categoryId;
    this.name = name;
    this.description = description;
    Object.freeze(this);
  }

  getId(): string {
    return this.id.value;
  }

  static create(
    categoryData: CategoryData
  ): Either<InvalidNameError, Category> {
    const nameOrError: Either<InvalidNameError, Name> = Name.create(
      categoryData.name
    );

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const name: Name = nameOrError.value;
    return right(
      new Category(new CategoryId(), name, categoryData.description)
    );
  }
}
