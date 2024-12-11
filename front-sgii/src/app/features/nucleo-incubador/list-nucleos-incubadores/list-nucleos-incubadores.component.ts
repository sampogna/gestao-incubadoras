import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { bcListNucleosIncubadores } from 'src/app/shared/breadcrumb-items';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';

@Component({
  selector: 'app-list-nucleos-incubadores',
  templateUrl: './list-nucleos-incubadores.component.html',
  styleUrls: ['./list-nucleos-incubadores.component.scss']
})
export class ListNucleosIncubadoresComponent implements OnInit {


  columns = ['Id', 'Descricao'];
  breadcrumbItems = bcListNucleosIncubadores;
  nucleos: NucleoIncubador[];
  termFilter: string;
  pagination: Pagination = new Pagination();

  constructor(
    private readonly router: Router,
    private readonly nucleoService: NucleoIncubadorService
  ) { }


  ngOnInit(): void {
    this.nucleoService.getAllNucleos(this.pagination).pipe(
      tap( res => {
        this.pagination.Page = res?.Page;
        this.pagination.PageSize = res?.PageSize;
        this.pagination.TotalCount = res?.TotalCount;
        this.pagination.TotalPages = res?.TotalPages;
        this.nucleos = res?.Data;
      })
    )
    .subscribe();
  }

  navigateToCreation(): void {
      this.router.navigateByUrl("/nucleo-incubador/editar");
  }

  navigateToEdit(nucleo: any): void {
      this.router.navigateByUrl("/nucleo-incubador/editar/" + nucleo.Id);
  }

  deleteElement(nucleo: any): void {
    //doSomething
  }
}
