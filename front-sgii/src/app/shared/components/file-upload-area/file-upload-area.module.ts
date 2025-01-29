import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadAreaComponent } from './file-upload-area.component';
import { UploadedItemsComponent } from './uploaded-items/uploaded-items.component';



@NgModule({
  declarations: [
    FileUploadAreaComponent,
    UploadedItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FileUploadAreaComponent]
})
export class FileUploadAreaModule { }
