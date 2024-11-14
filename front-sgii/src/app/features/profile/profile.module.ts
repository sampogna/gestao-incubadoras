import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SimpleInputModule } from 'src/app/shared/components/simple-input/simple-input.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SimpleInputModule,
  ],
})
export class ProfileModule { }
