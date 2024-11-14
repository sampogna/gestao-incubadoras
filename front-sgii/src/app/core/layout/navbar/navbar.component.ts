import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit() { }

    logout(): void {
        this.loginService.logout();
        this.router.navigateByUrl("login");
    }
}