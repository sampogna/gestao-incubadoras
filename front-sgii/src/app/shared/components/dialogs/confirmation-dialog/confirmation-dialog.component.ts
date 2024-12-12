import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ConfirmationDialogData {
  title: string = 'Confirme a ação';
  message: string = '';
  primaryButtonTitle: string = 'Confirmar';
  secondaryButtonTitle: string = 'Cancelar';
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  @Output() confirmed: EventEmitter<any>;
  @Output() canceled: EventEmitter<any>;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {
    this.data = Object.assign(new ConfirmationDialogData(), data);
  }

  confirm() {
    
  }
}