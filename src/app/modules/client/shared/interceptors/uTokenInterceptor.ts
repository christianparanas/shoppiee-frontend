import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// services
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const skipIntercept = req.headers.has('skip')

    if(skipIntercept) {
      const req1 = req.clone({
        headers: req.headers.delete('skip')
      })

      return next.handle(req1)
    }

    if (req.headers.get("skip"))
      return next.handle(req);

    let userToken: any = localStorage.getItem('uJwtToken');

    console.log(this.authService.isLoggedIn())

    if(userToken == null || this.authService.isLoggedIn() == false) {
      userToken = 'chand'
    }

    const modifiedReq = req.clone({ 
      headers: req.headers.set('uJwtToken', userToken),
    });
    return next.handle(modifiedReq);
  }
}