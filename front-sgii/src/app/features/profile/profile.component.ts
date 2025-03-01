import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	user: IUser | null;

	constructor(private loginService: LoginService) {}

	ngOnInit(): void {
		this.user = this.loginService.currentUserValue;
	}
}
