import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioRoutingModule } from './usuario.routing';



@NgModule({
  declarations: [
    ListUsuarioComponent,
    EditUsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule
  ],
  exports: [
    ListUsuarioComponent,
    EditUsuarioComponent,
  ],
})
export class UsuarioModule { }
