import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/card/card.module';
import { FileUploadAreaModule } from './components/file-upload-area/file-upload-area.module';
import { EditButtonModule } from './components/edit-button/edit-button.module';
import { SimpleInputModule } from './components/simple-input/simple-input.module';
import { TableStripedModule } from './components/table-striped/table-striped.module';
import { DeleteButtonModule } from './components/delete-button/delete-button.module';
import { ButtonModule } from './buttons/button.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogModule } from './components/dialogs/confirmation-dialog/confirmation-dialog.module';
import { CustomPaginatorModule } from './components/custom-paginator/custom-paginator.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CardModule,
    FileUploadAreaModule,
    EditButtonModule,
    SimpleInputModule,
    TableStripedModule,
    DeleteButtonModule,
    ButtonModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    FormsModule,
    ConfirmationDialogModule,
    CustomPaginatorModule
  ],
  exports: [
    CardModule,
    FileUploadAreaModule,
    EditButtonModule,
    SimpleInputModule,
    TableStripedModule,
    DeleteButtonModule,
    ButtonModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    FormsModule,
    ConfirmationDialogModule
  ]
})
export class SharedModule { }
