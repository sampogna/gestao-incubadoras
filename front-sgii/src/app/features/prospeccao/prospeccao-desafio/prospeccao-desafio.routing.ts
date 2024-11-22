import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListProspeccaoDesafioComponent } from "./list-prospeccao-desafio/list-prospeccao-desafio.component";
import { EditProspeccaoDesafioComponent } from "./edit-prospeccao-desafio/edit-prospeccao-desafio.component";


const routes: Routes = [
  { path: '', component: ListProspeccaoDesafioComponent },
  { path: 'editar', component: EditProspeccaoDesafioComponent },
  { path: 'editar/:id', component: EditProspeccaoDesafioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspeccaoDesafioRoutingModule { }