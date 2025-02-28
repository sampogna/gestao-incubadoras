import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  auth: Auth = new Auth();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

  logIntoSystem(): void {
    this.loginService.login(this.auth)
      .subscribe(
        (data => {
          if (typeof data != 'string')
            this.router.navigateByUrl('bem-vindo');
          else
            this.toastr.error(data);
        })
      )
  }
}
