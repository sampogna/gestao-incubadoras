import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileBase } from '../../models/file.model';

@Component({
  selector: 'file-upload-area',
  templateUrl: './file-upload-area.component.html',
  styleUrls: ['./file-upload-area.component.scss']
})
export class FileUploadAreaComponent {

  isDragOver = false;
  @Input() allowedFileTypes = ''; // por exemplo: 'image/*,application/pdf'
  @Input() filesUploaded: FileBase[] = [];
  @Output() onFileUploaded = new EventEmitter<File>();
  @Output() onFileDeleted = new EventEmitter<FileBase>();

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFiles(input.files);
    }
  }

  private handleFiles(files: FileList): void {
    if (files?.length)
      this.onFileUploaded.emit(files[0]);
  }

}
