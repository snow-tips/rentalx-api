import { CreateCategory } from "../../../domain/usecases/create-category";
import { CategoryResponse } from "../../../domain/usecases/create-category/category-response";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
  badRequest,
} from "../contracts";
import { CategoryRequest } from "../requests/category-request";
import { CategoryViewModel } from "../view-models/category";
import { MissingParamError } from "./errors/missing-param-error";

export class CategoriesController implements Controller {
  constructor(private readonly createCategory: CreateCategory) {}

  async handle(
    categoryRequest: HttpRequest<CategoryRequest>
  ): Promise<HttpResponse<CategoryViewModel>> {
    try {
      const { name, description } = categoryRequest.body;

      if (!name || !description) {
        const field = !name ? "name" : "description";
        return badRequest(new MissingParamError(field));
      }

      const categoryResponse: CategoryResponse = await this.createCategory.execute(
        categoryRequest.body
      );

      if (categoryResponse.isLeft()) {
        return badRequest(categoryResponse.value);
      }

      return ok(CategoryViewModel.map(categoryResponse.value), 201);
    } catch (error) {
      console.log(error);
      return serverError("internal");
    }
  }
}
