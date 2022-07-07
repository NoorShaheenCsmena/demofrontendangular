import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, CurrentUserDTO, UserLoginDTO } from '../dto';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl=environment.URL+"user/login"
constructor(private _http:HttpClient) { }
  currentUser:BehaviorSubject<CurrentUserDTO> = new BehaviorSubject({});
  login=(user:UserLoginDTO)=>this._http.post<AuthResponse>(this.apiUrl,user).pipe(take(1),catchError(i=>of<AuthResponse>({accessToken:'',refreshToken:'',message:i.error})));
  logout=()=>{localStorage.clear(); this.updateCurrentUser();}
  updateCurrentUser=()=>{let token =localStorage.getItem('token');token?this.currentUser.next(jwt_decode(token!)):this.currentUser.next({})}
  get user(){return this.currentUser;}
  get USERDATAFROMTOKEN():CurrentUserDTO { if(localStorage.getItem('token')){return jwt_decode(localStorage.getItem('token')!)}else return{};}
  getAllUsers=()=>this._http.get<any[]>(this.apiUrl.replace('/login','')).pipe(take(1));
}

