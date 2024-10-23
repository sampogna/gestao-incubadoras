import { NgModule } from "@angular/core";
import { EditSensibilizacaoComponent } from "./edit-sensibilizacao/edit-sensibilizacao.component";
import { ListSensibilizacaoComponent } from "./list-sensibilizacao/list-sensibilizacao.component";
import { SensibilizacaoRoutingModule } from "./sensibilizacao.routing";
import { ButtonModule } from "src/app/shared/buttons/button.module";
import { MatTableModule } from '@angular/material/table';
import { CardModule } from "src/app/shared/components/card/card.module";
import { SimpleInputModule } from "src/app/shared/components/simple-input/simple-input.module";
import { TableStripedModule } from "src/app/shared/components/table-striped/table-striped.module";
import { EditButtonModule } from "src/app/shared/components/edit-button/edit-button.module";

@NgModule({
  declarations: [
    ListSensibilizacaoComponent,
    EditSensibilizacaoComponent
  ],
  imports: [
    SensibilizacaoRoutingModule,
    ButtonModule,
    MatTableModule,
    CardModule,
    SimpleInputModule,
    TableStripedModule,
    EditButtonModule
  ]
})
export class SensibilizacaoModule { }
  