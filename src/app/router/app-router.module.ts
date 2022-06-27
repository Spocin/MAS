import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "../main/main.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ LoginComponent ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {}
