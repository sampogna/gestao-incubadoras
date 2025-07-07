import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NucleoIncubador } from '../models/nucleo-incubador.model';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { PaginatedResult, Pagination } from '../models/pagination.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NucleoIncubadorService {

  private readonly controllerPrefix = 'api/NucleoIncubador'

  constructor(
    private readonly http: HttpClient,
    private toastr: ToastrService
  ) { }

  public getAllNucleos(pagination: Pagination, filter?: string): Observable<PaginatedResult<NucleoIncubador>> {
    return this.http.get<PaginatedResult<NucleoIncubador>>(
      API_URL + this.controllerPrefix + '/paginated', 
      { 
        params: 
        { 
          page: pagination.Page,
          pageSize: pagination.PageSize,
          filter: filter ?? ''
        } 
      })
  }

  public getAllNucleosNonPaginated(): Observable<NucleoIncubador[]> {
    return this.http.get<NucleoIncubador[]>(
      API_URL + this.controllerPrefix)
  }

  public getNucleoById(id: number): Observable<NucleoIncubador> {
    return this.http
      .get<NucleoIncubador>(
        API_URL + this.controllerPrefix + `/${id}`
      )      
  }

  public updateNucleo(nucleoIncubador: NucleoIncubador): Observable<any> {
    return this.http
      .put<NucleoIncubador>(
        API_URL + this.controllerPrefix + `/${nucleoIncubador.Id}`,
        nucleoIncubador
      )
  }

  public createNucleo(nucleoIncubador: NucleoIncubador): Observable<NucleoIncubador> {
    return this.http
      .post<NucleoIncubador>(
        API_URL + this.controllerPrefix,
        nucleoIncubador
      )
  }

  public deleteNucleo(id: number) : Observable<any> {
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
