import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadAreaComponent } from './file-upload-area.component';



@NgModule({
  declarations: [
    FileUploadAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FileUploadAreaComponent]
})
export class FileUploadAreaModule { }
