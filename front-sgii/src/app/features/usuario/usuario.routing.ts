import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditUsuarioComponent } from "./edit-usuario/edit-usuario.component";
import { ListUsuarioComponent } from "./list-usuario/list-usuario.component";


const routes: Routes = [
  { path: '', component: ListUsuarioComponent },
  { path: 'editar', component: EditUsuarioComponent },
  { path: 'editar/:id', component: EditUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }