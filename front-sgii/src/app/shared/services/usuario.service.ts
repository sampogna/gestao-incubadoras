import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { PaginatedResult, Pagination } from '../models/pagination.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly controllerPrefix = 'api/Usuario'

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAllUsuarios(pagination: Pagination, filter?: string): Observable<PaginatedResult<Usuario>> {
    return this.http.get<PaginatedResult<Usuario>>(
      API_URL + this.controllerPrefix + '/paginated', 
      { 
        params: 
        { 
          page: pagination.Page,
          pageSize: pagination.PageSize,
          filter: filter ?? ''
        } 
      })
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public getAllUsuariosNonPaginated(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      API_URL + this.controllerPrefix)
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public getUsuarioById(id: number): Observable<Usuario> {
    return this.http
      .get<Usuario>(
        API_URL + this.controllerPrefix + `/${id}`
      )      
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public updateUsuario(nucleoIncubador: Usuario): Observable<any> {
    return this.http
      .put<Usuario>(
        API_URL + this.controllerPrefix + `/${nucleoIncubador.Id}`,
        nucleoIncubador
      )
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public createUsuario(nucleoIncubador: Usuario): Observable<Usuario> {
    return this.http
      .post<Usuario>(
        API_URL + this.controllerPrefix,
        nucleoIncubador
      )
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public deleteUsuario(id: number) : Observable<any> {
    return this.http
      .delete(
        API_URL + this.controllerPrefix + `/${id}`
      )
  }


}
