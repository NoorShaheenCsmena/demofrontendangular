import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[
  {
    path:'login',
    component:LoginComponent
  },
  {path:'register',
  component:RegisterComponent},
  {
    path:'**',
    redirectTo:'login'
  }]
  @NgModule({
    imports: [
      CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent,RegisterComponent]
})
export class AuthenticationModule { }
