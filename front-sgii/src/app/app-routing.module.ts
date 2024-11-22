import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginGuard } from './shared/guards/login.guard';
import { ProfileComponent } from './features/profile/profile.component';


const loginModule = () => import('./core/login/login.module').then(x => x.LoginModule);
const bemVindoModule = () => import ('./features/bem-vindo/bem-vindo.module').then(x => x.BemVindoModule)
const sensibilizacaoModule = () => import ('./features/sensibilizacao/sensibilizacao.module').then(x => x.SensibilizacaoModule)
const nucleoIncubadorModule = () => import ('./features/nucleo-incubador/nucleo-incubador.module').then(x => x.NucleoIncubadorModule)
const prospeccaoDesafioModule = () => import ('./features/prospeccao/prospeccao-desafio/prospeccao-desafio.module').then(x => x.ProspeccaoDesafioModule)
const prospeccaoReuniaoModule = () => import ('./features/prospeccao/prospeccao-reuniao/prospeccao-reuniao.module').then(x => x.ProspeccaoReuniaoModule)

const routes: Routes = [
  { path: 'login', loadChildren: loginModule },
  { 
    path: '', 
    component: LayoutComponent,  
    canActivate: [LoginGuard], 
    children: [
      { path: 'bem-vindo', loadChildren: bemVindoModule },
      { path: 'sensibilizacao', loadChildren: sensibilizacaoModule },
      { path: 'nucleo-incubador', loadChildren: nucleoIncubadorModule },
      { path: 'prospeccao/desafio', loadChildren: prospeccaoDesafioModule },
      { path: 'prospeccao/reuniao', loadChildren: prospeccaoReuniaoModule },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
