import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardDetails } from '../dto';
import {take} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BannersService {
private apiUrl  = 'banner/'
constructor(private _http:HttpClient) { }
getbanners=()=> this._http.get<CardDetails[]>(environment.URL+this.apiUrl).pipe(take(1));
postbanner=(banner:CardDetails)=> this._http.post<CardDetails>(environment.URL+this.apiUrl,banner).pipe(take(1));
updatebanner=(banner:CardDetails)=> this._http.put<CardDetails>(environment.URL+this.apiUrl,banner).pipe(take(1));
deletetbanners=(id:string)=> this._http.delete<CardDetails>(environment.URL+this.apiUrl+id).pipe(take(1));
}
