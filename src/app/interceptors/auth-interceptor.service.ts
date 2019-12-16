import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService);
    let localToken= localStorage.getItem('token');
    let sessionToken = sessionStorage.getItem('token');

    /* console.log("getTok: " + this.authService.getToken());
       console.log(localToken);
       console.log(sessionToken);*/



    if (localToken) {
      request = request.clone({
        setHeaders: {
          Authorization: this.authService.getToken()
        }
      });
      return next.handle(request);
    } else if (sessionToken) {
      request = request.clone({
        setHeaders: {
          Authorization: this.authService.getToken()
        }
      });
      return next.handle(request);
    } else {
      request = request.clone()
      return next.handle(request);
    }

  }

}
