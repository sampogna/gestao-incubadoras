// const loginModule = () => import('./core/login/login.module').then(x => x.LoginModule);

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: '', loadComponent: ListNucleosIncubadoresComponent },
  { path: '', loadComponent: EditNucleosIncubadoresComponent },
  { path: ':id', loadComponent: EditNucleosIncubadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }