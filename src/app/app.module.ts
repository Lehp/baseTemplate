import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './base/headerComponent/header.component';
import { IndexComponent } from "../index/index.component"

@NgModule({
  declarations: [
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [HeaderComponent, IndexComponent],
  providers: []
})
export class AppModule { }
