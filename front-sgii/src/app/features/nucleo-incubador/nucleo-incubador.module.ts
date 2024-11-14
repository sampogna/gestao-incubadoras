import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNucleosIncubadoresComponent } from './edit-nucleos-incubadores/edit-nucleos-incubadores.component';
import { ListNucleosIncubadoresComponent } from './list-nucleos-incubadores/list-nucleos-incubadores.component';



@NgModule({
  declarations: [
    EditNucleosIncubadoresComponent,
    ListNucleosIncubadoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NucleoIncubadorModule { }
