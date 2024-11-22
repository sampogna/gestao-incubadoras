import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditSensibilizacaoComponent } from "./edit-sensibilizacao/edit-sensibilizacao.component";
import { ListSensibilizacaoComponent } from "./list-sensibilizacao/list-sensibilizacao.component";


const routes: Routes = [
  { path: '', component: ListSensibilizacaoComponent },
  { path: 'editar', component: EditSensibilizacaoComponent },
  { path: 'editar/:id', component: EditSensibilizacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensibilizacaoRoutingModule { }