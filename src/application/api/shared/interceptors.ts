import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap(() => {
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest<Request>();
        // log current request
        console.log('req.url', req.url);
      }),
    );
  }
}

export interface ResponseWrapper<T> {
  data: T;
  statusCode: number;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ResponseWrapper<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<ResponseWrapper<T>> | Promise<Observable<ResponseWrapper<T>>> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse<Response>();
    return next.handle().pipe(
      catchError((err) =>
        throwError(() => {
          return new BadRequestException({
            data: err,
            statusCode: err.status,
          });
        }),
      ),
      map((data) => {
        return {
          data,
          statusCode: response.statusCode,
        };
      }),
    );
  }
}
