import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router, private readonly toast: ToastrService) {}

  canActivate():boolean{
    if(this.loginService.isLoggedIn()){
      return true
    }else{
      this.toast.error('Faça login para continuar');
      this.router.navigate(['/Login']);
      return false;
    }
  }
}