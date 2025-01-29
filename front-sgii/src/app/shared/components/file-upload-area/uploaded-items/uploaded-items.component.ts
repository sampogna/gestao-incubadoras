import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileBase } from 'src/app/shared/models/file.model';

@Component({
  selector: 'uploaded-items',
  templateUrl: './uploaded-items.component.html',
  styleUrls: ['./uploaded-items.component.scss']
})
export class UploadedItemsComponent {
  @Input() files: FileBase[] = [];
  @Output() onFileDeleted = new EventEmitter<FileBase>();

}
