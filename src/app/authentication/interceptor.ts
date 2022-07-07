import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services';
@Injectable()
export class BannerInterceptor implements HttpInterceptor {
  constructor(private auth:AuthService){}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    let user= this.auth.USERDATAFROMTOKEN;
    return(user.Id)? next.handle(httpRequest.clone({setHeaders:{Authorization: "Bearer "+ (localStorage.getItem('token')||""), userid:user.Id, username:user.Name||'' , firstname:user.Name||"" }})):next.handle(httpRequest);

  }
}