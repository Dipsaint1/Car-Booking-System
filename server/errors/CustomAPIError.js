import { StatusCodes } from "http-status-codes";

class CustomAPIError extends Error{
  constructor(message){
    super(message);
  }
}

export class BadRequestError extends CustomAPIError{
  constructor(message){
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export class UnAuthorizedError extends CustomAPIError{
  constructor(message){
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export class InternalServerError extends CustomAPIError{
  constructor(message){
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

export class NotFoundError extends CustomAPIError{
  constructor(message){
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

