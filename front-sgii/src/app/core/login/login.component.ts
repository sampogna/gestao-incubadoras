import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  auth: Auth = new Auth();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.verifyIfUserIsLoggedInThenRedirect();
  }

  logIntoSystem(): void {
    this.loginService.login(this.auth)
      .subscribe(
        (data => {
          localStorage.setItem('token', data);
          this.router.navigateByUrl('bem-vindo');
        })
      )
  }

  verifyIfUserIsLoggedInThenRedirect(): void {
    if (this.loginService.isLoggedIn) {
      this.router.navigateByUrl('bem-vindo');
    }
  }
}
