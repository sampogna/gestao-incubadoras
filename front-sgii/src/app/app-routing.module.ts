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
const usuarioModule = () => import ('./features/usuario/usuario.module').then(x => x.UsuarioModule);

const routes: Routes = [
  { path: 'login', loadChildren: loginModule },
  { 
    path: '', 
    component: LayoutComponent,  
    canActivate: [LoginGuard], 
    children: [
      { path: 'bem-vindo', loadChildren: bemVindoModule, canActivate: [LoginGuard] },
      { path: 'sensibilizacao', loadChildren: sensibilizacaoModule, canActivate: [LoginGuard] },
      { path: 'nucleo-incubador', loadChildren: nucleoIncubadorModule, canActivate: [LoginGuard] },
      { path: 'prospeccao/desafio', loadChildren: prospeccaoDesafioModule, canActivate: [LoginGuard] },
      { path: 'prospeccao/reuniao', loadChildren: prospeccaoReuniaoModule, canActivate: [LoginGuard] },
      { path: 'usuario', loadChildren:  usuarioModule, canActivate: [LoginGuard]},
      { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard]}
    ]
  },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
