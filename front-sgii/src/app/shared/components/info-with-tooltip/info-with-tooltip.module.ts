import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoWithTooltipComponent } from './info-with-tooltip.component';



@NgModule({
  declarations: [
    InfoWithTooltipComponent
  ],
  imports: [
    CommonModule  
  ],
  exports: [InfoWithTooltipComponent]
})
export class InfoWithTooltipModule { }
