import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBreadcrumbComponent } from './card-breadcrumb/card-breadcrumb.component';
import { ButtonModule } from '../../buttons/button.module';



@NgModule({
  declarations: [
    CardHeaderComponent,
    CardBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    CardHeaderComponent,
    CardBreadcrumbComponent
  ]
})
export class CardModule { }
