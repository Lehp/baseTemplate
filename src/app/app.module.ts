import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './base/headerComponent/HeaderComponent';
import { IndexComponent } from "./base/IndexComponent/IndexComponent"
import { HomeComponent} from './base/HomeComponent/HomeComponent';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  bootstrap: [HomeComponent],
  providers: []
})
export class AppModule { }
