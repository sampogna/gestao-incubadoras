import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, of, throwError } from 'rxjs';
import { Auth, IUser, UserTypes } from '../models/login.model';
import { API_URL } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private userSubject: BehaviorSubject<IUser | null>;
    public user: Observable<IUser | null>;

    
  private readonly controllerPrefix = 'api/Auth'
    
    constructor(
        private http: HttpClient
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

    login(user: Auth): Observable<Usuario> {
        /**
         * Retorna string para erro
         * Para sucesso, retorna o objeto do usuario
         */
        // this.userSubject.next(this.mockedUser)
        // localStorage.setItem('user', JSON.stringify(this.mockedUser));
        // return of(this.mockedUser);



        return this.http.get<Usuario>(
            API_URL + this.controllerPrefix + '/SignIn', 
            { 
                params: 
                { 
                    email: user.username,
                    senha: user.password
                } 
            })
            .pipe(
                catchError(err => {
                    console.error('API Error:', err);
                    return EMPTY;
                })
            );

    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(undefined);
      }

}