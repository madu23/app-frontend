import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.CurrentUserValue;
        // let httpOptions = {
        //     headers: new HttpHeaders({
        //       'Content-Type':  'application/json',
        //     })
        //   };
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                // headers: httpOptions.headers,
                setHeaders: {
                    Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        }
        return next.handle(request);
    }
}
