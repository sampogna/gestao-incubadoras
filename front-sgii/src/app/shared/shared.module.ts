import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/card/card.module';
import { FileUploadAreaModule } from './components/file-upload-area/file-upload-area.module';
import { EditButtonModule } from './components/edit-button/edit-button.module';
import { SimpleInputModule } from './components/simple-input/simple-input.module';
import { TableStripedModule } from './components/table-striped/table-striped.module';
import { DeleteButtonModule } from './components/delete-button/delete-button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    FileUploadAreaModule,
    EditButtonModule,
    SimpleInputModule,
    TableStripedModule,
    DeleteButtonModule
  ],
  exports: [
    CardModule,
    FileUploadAreaModule,
    EditButtonModule,
    SimpleInputModule,
    TableStripedModule,
    DeleteButtonModule
  ]
})
export class SharedModule { }
