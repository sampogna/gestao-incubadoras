import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { SimpleInputModule } from 'src/app/shared/components/simple-input/simple-input.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/buttons/button.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SimpleInputModule,
    RouterModule.forChild(LoginRoutes),
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
