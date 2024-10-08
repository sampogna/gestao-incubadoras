import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { SimpleInputModule } from 'src/app/shared/components/simple-input/simple-input.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/buttons/button.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(LoginRoutes),
    SimpleInputModule,
    FormsModule,
    ButtonModule
  ]
})
export class LoginModule { }
