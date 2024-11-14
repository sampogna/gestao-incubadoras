import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNucleosIncubadoresComponent } from './edit-nucleos-incubadores/edit-nucleos-incubadores.component';
import { ListNucleosIncubadoresComponent } from './list-nucleos-incubadores/list-nucleos-incubadores.component';
import { NucleoIncubadorRoutingModule } from './nucleo-incubador.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EditNucleosIncubadoresComponent,
    ListNucleosIncubadoresComponent
  ],
  imports: [
    CommonModule,
    NucleoIncubadorRoutingModule,
    SharedModule
  ]
})
export class NucleoIncubadorModule { }
