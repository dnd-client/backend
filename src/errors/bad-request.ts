import { APIError } from './APIError';
import { HTTP_STATUSES } from './interfaces';

export const badRequestErrors = {
  EmailAlreadyExists: new APIError(HTTP_STATUSES.BAD, "Данный email уже зарегистрирован", 1),
  LoginAlreadyExists: new APIError(HTTP_STATUSES.BAD, "Данный логин уже зарегистрирован", 2),
}