import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './base/IndexComponent/IndexComponent';
import { HeaderComponent } from './base/headerComponent/HeaderComponent';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
