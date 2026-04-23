import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

type ErrorMessage = string | string[] | Record<string, unknown>;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function hasMessage(
  value: Record<string, unknown>,
): value is Record<string, unknown> & { message: unknown } {
  return 'message' in value;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: ErrorMessage = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();

      const res: unknown = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
      } else if (isObject(res) && hasMessage(res)) {
        const candidate = res.message;
        if (typeof candidate === 'string' || Array.isArray(candidate)) {
          message = candidate as string | string[];
        } else if (isObject(candidate)) {
          message = candidate;
        } else {
          message = res;
        }
      } else if (isObject(res)) {
        message = res;
      }
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
