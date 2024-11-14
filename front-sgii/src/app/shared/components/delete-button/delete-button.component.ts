import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Output() clicked = new EventEmitter<any>();
}
