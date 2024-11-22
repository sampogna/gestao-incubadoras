import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListProspeccaoReuniaoComponent } from "./list-prospeccao-reuniao/list-prospeccao-reuniao.component";
import { EditProspeccaoReuniaoComponent } from "./edit-prospeccao-reuniao/edit-prospeccao-reuniao.component";


const routes: Routes = [
  { path: '', component: ListProspeccaoReuniaoComponent },
  { path: 'editar', component: EditProspeccaoReuniaoComponent },
  { path: 'editar/:id', component: EditProspeccaoReuniaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspeccaoReuniaoRoutingModule { }