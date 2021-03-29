import { Request, Response } from "express";
import { Controller, HttpRequest } from "../../adapters/presentation/contracts";

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest<any> = {
      body: request.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    response.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
