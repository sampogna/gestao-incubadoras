import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { PaginatedResult, Pagination } from '../models/pagination.model';
import { Sensibilizacao } from '../models/sensibilizacao.model';

@Injectable({
  providedIn: 'root'
})
export class SensibilizacaoService {

  private readonly controllerPrefix = 'api/Sensibilizacao'

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAllSensibilizacoes(pagination: Pagination, filter?: string): Observable<PaginatedResult<Sensibilizacao>> {
    return this.http.get<PaginatedResult<Sensibilizacao>>(
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

  public getSensibilizacaoById(id: number): Observable<Sensibilizacao> {
    return this.http
      .get<Sensibilizacao>(
        API_URL + this.controllerPrefix + `/${id}`
      )      
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public updateSensibilizacao(sensibilizacao: Sensibilizacao): Observable<any> {
    return this.http
      .put<Sensibilizacao>(
        API_URL + this.controllerPrefix + `/${sensibilizacao.Id}`,
        sensibilizacao
      )
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public createSensibilizacao(sensibilizacao: Sensibilizacao): Observable<Sensibilizacao> {
    return this.http
      .post<Sensibilizacao>(
        API_URL + this.controllerPrefix,
        sensibilizacao
      )
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public deleteSensibilizacao(id: number) : Observable<any> {
    return this.http
      .delete(
        API_URL + this.controllerPrefix + `/${id}`
      )
  }


}
