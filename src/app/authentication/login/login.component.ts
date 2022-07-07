import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private _router:Router,private _fb:FormBuilder,private _authService:AuthService){}
userLoginForm :FormGroup=this._fb.group({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
  RouteToRegister(){this._router.navigate(['auth/register'])}
  Login(){
    if(!this.userLoginForm.invalid) 
    this._authService.login(this.userLoginForm.value).subscribe(res=>{if(res.accessToken&&res.refreshToken){
      localStorage.setItem("token",res.accessToken);
      localStorage.setItem("refreshToken",res.refreshToken);
      this._authService.updateCurrentUser();
      this._router.navigate(['/banners']);
  }else return window.alert(res.message+"")});
    return;
  }
}
