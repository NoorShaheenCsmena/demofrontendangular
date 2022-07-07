import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannersListModule } from './banners-list/banners-list.module';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BannerInterceptor } from './authentication/interceptor';

@NgModule({
  declarations: [	
    AppComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannersListModule,
    HttpClientModule

      ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BannerInterceptor, multi: true }
  ]})
export class AppModule { }
