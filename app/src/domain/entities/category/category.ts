import { Either, left, right } from "../../../shared/either";
import { CategoryData } from "./category-data";
import { InvalidNameError } from "./errors/invalid-name";
import { Name } from "./name";

export class Category {
  public readonly name: Name;
  public readonly description: string;

  private constructor(name: Name, description: string) {
    this.name = name;
    this.description = description;
    Object.freeze(this);
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
    return right(new Category(name, categoryData.description));
  }
}
