import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser, UserTypes } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private userSubject: BehaviorSubject<IUser | null>;
    public user: Observable<IUser | null>;
    
    constructor(
        // private httpClient: HttpClient
    ) { 
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    mockedUser = {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        incubatorCoreId: 1,
        type: UserTypes.Advanced
    } as IUser;


    public get currentUserValue(): (IUser | null) {
        debugger;
        return this.userSubject.value;
    }

    public get isLoggedIn(): boolean {
        return !!this.userSubject?.value;
    }

    login(): Observable<IUser | string> {
        /**
         * Retorna string para erro
         * Para sucesso, retorna o objeto do usuario
         */
        this.userSubject.next(this.mockedUser)
        localStorage.setItem('user', JSON.stringify(this.mockedUser));
        return of(this.mockedUser);
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(undefined);
      }

}