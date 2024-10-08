import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

// const featuresModule = () => import('./features/features.module').then(x => x.FeaturesModule)

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
  // { path: 's', loadChildren: featuresModule },
  
  { path: '**', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
