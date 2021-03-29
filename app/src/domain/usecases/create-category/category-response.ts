import { Either } from "../../../shared/either";
import { Category } from "../../entities/category";
import { InvalidNameError } from "../../entities/category/errors/invalid-name";

export type CategoryResponse = Either<InvalidNameError, Category>;
