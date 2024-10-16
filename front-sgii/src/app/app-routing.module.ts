import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginGuard } from './shared/guards/login.guard';


const loginModule = () => import('./core/login/login.module').then(x => x.LoginModule);
const bemVindoModule = () => import ('./features/bem-vindo/bem-vindo.module').then(x => x.BemVindoModule)
const sensibilizacaoModule = () => import ('./features/sensibilizacao/sensibilizacao.module').then(x => x.SensibilizacaoModule)


const routes: Routes = [
  { path: 'login', loadChildren: loginModule },
  { 
    path: '', 
    component: LayoutComponent,  
    canActivate: [LoginGuard], 
    children: [
      { path: 'bem-vindo', loadChildren: bemVindoModule },
      { path: 'sensibilizacao', loadChildren: sensibilizacaoModule }
    ]
  },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
