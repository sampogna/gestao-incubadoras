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
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { FileUploadAreaModule } from "src/app/shared/components/file-upload-area/file-upload-area.module";
import { MatDialogModule } from "@angular/material/dialog";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    ListSensibilizacaoComponent,
    EditSensibilizacaoComponent
  ],
  imports: [
    CommonModule,
    SensibilizacaoRoutingModule,
    FormsModule,
    SharedModule

  ],
  providers: [provideNgxMask()]
})
export class SensibilizacaoModule { }
  