import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser, UserTypes } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    
    constructor(
        // private httpClient: HttpClient
    ) { }

    mockedUser = {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        incubatorCoreId: 1,
        type: UserTypes.Advanced
    } as IUser;

    login(): Observable<IUser | string> {
        /**
         * Retorna string para erro
         * Para sucesso, retorna o objeto do usuario
         */
        return of(this.mockedUser);
    }

}