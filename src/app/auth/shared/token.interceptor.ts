import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getToken();
    console.log('log start --------------')
    console.log(token)
    if (token) {
      request = request.clone(
        {
          setHeaders: {
            Authorization: 'Bearer ' + token!
          }
        }
      )
    }

    return next.handle(request);
  }
}
