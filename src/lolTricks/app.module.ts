import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DetailsComponent } from "./details/details.component";
import { RouterModule, Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { BaseComponent } from "./base/base.component";

const lolRoutes = [
  { path: "", component: OverviewComponent },
  // { path: "details/:detailsId", component: BaseCoomponent }
  { path: "details/:detailsId", component: DetailsComponent },
  { path: "details/:detailsId", component: DetailsComponent }
];

@NgModule({
  declarations: [
    DetailsComponent, OverviewComponent, BaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      lolRoutes
    )

  ],
  providers: [], // service der überall verfügbar sein soll
  bootstrap: [BaseComponent]
})
export class AppModule {

}


