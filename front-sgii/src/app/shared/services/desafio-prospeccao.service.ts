import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { PaginatedResult, Pagination } from '../models/pagination.model';
import { convertDateObjectToDateString } from '../utils/date';
import { DesafioInovacao } from '../models/prospeccao.model';

@Injectable({
  providedIn: 'root'
})
export class DesafioProspeccaoService {

  private readonly controllerPrefix = 'api/DesafioInovacao'

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAllDesafios(pagination: Pagination, filter?: string): Observable<PaginatedResult<DesafioInovacao>> {
    return this.http.get<PaginatedResult<DesafioInovacao>>(
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

  public getDesafioInovacaoById(id: number): Observable<DesafioInovacao> {
    return this.http
      .get<DesafioInovacao>(
        API_URL + this.controllerPrefix + `/${id}`
      )      
      .pipe(
        map(reuniaoProspeccao =>( {...reuniaoProspeccao, DataInicioStr : convertDateObjectToDateString(new Date(reuniaoProspeccao.DataInicio))} )),
        map(reuniaoProspeccao =>( {...reuniaoProspeccao, DataFinalStr : convertDateObjectToDateString(new Date(reuniaoProspeccao.DataFinal))} )),
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public updateDesafioInovacao(desafioInovacao: DesafioInovacao): Observable<any> {
    return this.http
      .put<DesafioInovacao>(
        API_URL + this.controllerPrefix + `/${desafioInovacao.Id}`,
        desafioInovacao
      )
      .pipe(
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public createDesafioInovacao(desafioInovacao: DesafioInovacao): Observable<DesafioInovacao> {
    return this.http
      .post<DesafioInovacao>(
        API_URL + this.controllerPrefix,
        desafioInovacao
      )
      .pipe(
        map(reuniaoProspeccao =>( {...reuniaoProspeccao, DataInicioStr : convertDateObjectToDateString(new Date(reuniaoProspeccao.DataInicio))} )),
        map(reuniaoProspeccao =>( {...reuniaoProspeccao, DataFinalStr : convertDateObjectToDateString(new Date(reuniaoProspeccao.DataFinal))} )),
        catchError(err => {
          console.error('API Error:', err);
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }

  public deleteDesafioInovacao(id: number) : Observable<any> {
    return this.http
      .delete(
        API_URL + this.controllerPrefix + `/${id}`
      )
  }

  downloadExcel(): void {
    this.http.get(API_URL + this.controllerPrefix + '/export-excel', { responseType: 'blob' })
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'data-export.xlsx';
        anchor.click();
        window.URL.revokeObjectURL(url);
      });
  }

}
