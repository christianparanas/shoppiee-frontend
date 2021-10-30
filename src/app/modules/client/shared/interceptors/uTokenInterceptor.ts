import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get("skip"))
      return next.handle(req);
      

    const userToken: any = localStorage.getItem('uJwtToken');
    const modifiedReq = req.clone({ 
      headers: req.headers.set('uJwtToken', userToken),
    });
    return next.handle(modifiedReq);
  }
}