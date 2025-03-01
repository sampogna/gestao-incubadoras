
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly toastr: ToastrService
  ) {}

  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');
  
      if (token) {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
      }
  
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.toastr.error(error?.error ?? 'Erro ao tentar realizar a ação. Contate o administrador do sistema.');
          }
          return throwError(() => error);
        })
      );;
    }


}