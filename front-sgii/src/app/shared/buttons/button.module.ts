import { NgModule } from '@angular/core';
import { SecondaryButtonDirective } from './secondary-button.directive';
import { PrimaryButtonDirective } from './primary-button.directive';

@NgModule({
  declarations: [PrimaryButtonDirective, SecondaryButtonDirective],
  imports: [],
  exports: [PrimaryButtonDirective, SecondaryButtonDirective],
})
export class ButtonModule {}