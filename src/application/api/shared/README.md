# Shared

## Interceptors

> The part of code which can intercept request/response

> Basically the interceptors wrap the request/response stream, so you can change any you want. So be careful when using this technique

- Your interceptor must implement the "intercept" method which has 2 arguments: ExecutionContent and CallHandler

```ts
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle();
  }
}
```

1. Aspect intercept

> Insert additional logic without affect

Let's say, we have an endpoint for webhook, and it is important to log every request to this endpoint, so that we can detect some strange requests to this endpoint

2. Transform response intercept

> Transform response data
