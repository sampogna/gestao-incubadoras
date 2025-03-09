import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { PaginatedResult, Pagination } from '../models/pagination.model';
import { convertDateObjectToDateString } from '../utils/date';
import { ReuniaoProspeccao } from '../models/prospeccao.model';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoProspeccaoService {

  private readonly controllerPrefix = 'api/ReuniaoProspeccao'

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAllReunioes(pagination: Pagination, filter?: string): Observable<PaginatedResult<ReuniaoProspeccao>> {
    return this.http.get<PaginatedResult<ReuniaoProspeccao>>(
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

  public getReuniaoProspeccaoById(id: number): Observable<ReuniaoProspeccao> {
    return this.http
      .get<ReuniaoProspeccao>(
        API_URL + this.controllerPrefix + `/${id}`
      )      
      .pipe(
        map(reuniaoProspeccao =>( {...reuniaoProspeccao, DataAcaoStr : convertDateObjectToDateString(new Date(reuniaoProspeccao.DataAcao))} )),
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public updateReuniaoProspeccao(reuniaoProspeccao: ReuniaoProspeccao): Observable<any> {
    return this.http
      .put<ReuniaoProspeccao>(
        API_URL + this.controllerPrefix + `/${reuniaoProspeccao.Id}`,
        reuniaoProspeccao
      )
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public createReuniaoProspeccao(reuniaoProspeccao: ReuniaoProspeccao): Observable<ReuniaoProspeccao> {
    return this.http
      .post<ReuniaoProspeccao>(
        API_URL + this.controllerPrefix,
        reuniaoProspeccao
      )
      .pipe(
        map(reuniaoProspeccao =>( {...reuniaoProspeccao, DataAcaoStr : convertDateObjectToDateString(new Date(reuniaoProspeccao.DataAcao))} )),
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public deleteReuniaoProspeccao(id: number) : Observable<any> {
    return this.http
      .delete(
        API_URL + this.controllerPrefix + `/${id}`
      )
  }

}
