import { ServerError } from "../controllers/errors/server-error";

export interface HttpRequest<T> {
  body?: T;
}

export interface HttpResponse<T> {
  statusCode: number;
  body: T;
}

export const badRequest = (error: Error): HttpResponse<any> => ({
  statusCode: 400,
  body: error.message,
});

export const ok = (data: any, status: number = 200): HttpResponse<any> => ({
  statusCode: status,
  body: data,
});

export const serverError = (reason: string): HttpResponse<any> => ({
  statusCode: 500,
  body: new ServerError(reason),
});
