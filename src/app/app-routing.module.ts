import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'banners'
  },
{
  path:'banners',
  loadChildren: () => import('./banners-list/banners-list.module').then(m=>m.BannersListModule)
},
{
  path:'auth',
  loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
