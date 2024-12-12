import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NucleoIncubador } from '../models/nucleo-incubador.model';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { PaginatedResult, Pagination } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class NucleoIncubadorService {

  private readonly controllerPrefix = 'api/NucleoIncubador'

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAllNucleos(pagination: Pagination): Observable<PaginatedResult<NucleoIncubador>> {
    return this.http.get<PaginatedResult<NucleoIncubador>>(
      API_URL + this.controllerPrefix + '/paginated', 
      { 
        params: 
        { 
          page: pagination.Page,
          pageSize: pagination.PageSize 
        } 
      })
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public getNucleoById(id: number): Observable<NucleoIncubador> {
    return this.http
      .get<NucleoIncubador>(
        API_URL + this.controllerPrefix + `/${id}`
      )      
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public updateNucleo(nucleoIncubador: NucleoIncubador): Observable<any> {
    return this.http
      .put<NucleoIncubador>(
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

  public createNucleo(nucleoIncubador: NucleoIncubador): Observable<NucleoIncubador> {
    return this.http
      .post<NucleoIncubador>(
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

  public deleteNucleo(id: number) : Observable<any> {
    return this.http
      .delete(
        API_URL + this.controllerPrefix + `/${id}`
      )
  }


}
