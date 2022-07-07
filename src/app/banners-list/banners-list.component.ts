import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CardDetails, CurrentUserDTO } from '../dto';
import { AuthService, BannersService } from '../services/';

@Component({
  selector: 'banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.scss']
})
export class BannersListComponent{
  constructor(private _bannersService:BannersService,private _router:Router,private _authService:AuthService) { }
  user:Observable<CurrentUserDTO>= this._authService.user;
  allUsers= this._authService.getAllUsers();
  cards = this._bannersService.getbanners();
  logout=()=>this._authService.logout();
  edit(banner:CardDetails){
    this._router.navigate(['/manage/card'],{state:{banner}})
  }
}
