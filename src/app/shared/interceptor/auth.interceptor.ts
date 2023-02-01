import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/main.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private mainService: MainService,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: { Token: '12345678986556156156155615614' },
    });
    return next.handle(request).pipe(
      map((res) => {
        console.log('Passed through the interceptor in response');
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          this.toastr.error('This is client side error!', 'Error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
          this.toastr.error('This is server side error!', 'Error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
    );
  }
}
