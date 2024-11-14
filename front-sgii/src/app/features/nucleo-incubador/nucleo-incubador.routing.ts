import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListNucleosIncubadoresComponent } from "./list-nucleos-incubadores/list-nucleos-incubadores.component";
import { EditNucleosIncubadoresComponent } from "./edit-nucleos-incubadores/edit-nucleos-incubadores.component";


const routes: Routes = [
  { path: '', component: ListNucleosIncubadoresComponent },
  { path: 'editar', component: EditNucleosIncubadoresComponent },
  { path: 'editar/:id', component: EditNucleosIncubadoresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NucleoIncubadorRoutingModule { }