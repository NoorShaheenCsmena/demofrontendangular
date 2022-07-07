import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersListComponent } from './banners-list.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[{
  path:'',
  component:BannersListComponent
}]
@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  declarations: [BannerComponent,BannersListComponent],
  exports:[BannersListComponent]
})
export class BannersListModule { }
