import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

export const ErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Entrou no interceptor');
  const messageService: MessageService = inject(MessageService);

  messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Message Content',
  });

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 0) {
      }
      if (error.status === 500) {
      }
      console.log('cath');
      return throwError(() => new Error(error));
    })
  );
};
