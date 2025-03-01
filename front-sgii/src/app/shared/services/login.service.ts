import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, of, throwError } from 'rxjs';
import { Auth, IUser, UserTypes } from '../models/login.model';
import { API_URL } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private userSubject: BehaviorSubject<IUser | null>;
    public user: Observable<IUser | null>;

    
  private readonly controllerPrefix = 'api/Auth'
    
    constructor(
        private http: HttpClient,
        private readonly toastr: ToastrService
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
        return this.userSubject.value;
    }


    isLoggedIn(): boolean{
        return !!localStorage.getItem('token')
    }

    //TO DO: construct user store so i can retrieve user name and role afterwards
    // decodedToken(){
    //     const jwtHelper = new JwtHelperService();
    //     const token = this.getToken()!;
    //     console.log(jwtHelper.decodeToken(token))
    //     return jwtHelper.decodeToken(token)
    //   }

    login(user: Auth): Observable<string> {
        const userDTO = {
            email : user.username,
            senha : user.password
        }
        return this.http.post(
            API_URL + this.controllerPrefix + '/SignIn', 
            userDTO, 
            {
                responseType: "text"
            }
        );
    }

    logout() {
        localStorage.removeItem('token');
        this.userSubject.next(undefined);
      }

}