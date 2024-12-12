import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'src/app/shared/buttons/button.module';


@NgModule({
  declarations: [ ConfirmationDialogComponent ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule
  ],
  exports: [ConfirmationDialogComponent]
})
export class ConfirmationDialogModule { }
