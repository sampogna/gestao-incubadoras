import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBreadCrumbItem } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {
  @Input() title: string = '';
  @Input() breadcrumbItems: IBreadCrumbItem[];
  
  @Output() buttonNewClicked: EventEmitter<any> = new EventEmitter();
  

  emitClickedNewRegistry(): void {
    this.buttonNewClicked.emit();
  }
}
