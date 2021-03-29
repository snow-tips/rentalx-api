import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeCategoriesController } from "../factories/category-controller";

export default (router: Router): void => {
  router.post("/categories", adaptRoute(makeCategoriesController()));
};
