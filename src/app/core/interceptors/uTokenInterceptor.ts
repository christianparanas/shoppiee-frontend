import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// services
import { AuthService as uAuthService } from '../../modules/client/shared/services/auth.service';
import { AuthService as adAuthService } from '../../modules/admin/shared/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userAuthService: uAuthService, private adminAuthService: adAuthService) {}

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
    let adminToken: any = localStorage.getItem('adJwtToken');

    if(userToken == null || this.userAuthService.isLoggedIn() == false) userToken = 'chand'
    if(adminToken == null || this.adminAuthService.isLoggedIn() == false) adminToken = 'chand'

    const modifiedReq = req.clone({ 
      headers: req.headers.set('uJwtToken', userToken)
              .set('adJwtToken', adminToken)
    });
    return next.handle(modifiedReq);
  }
}