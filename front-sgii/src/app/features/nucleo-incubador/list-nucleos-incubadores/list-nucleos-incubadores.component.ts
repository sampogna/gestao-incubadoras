import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { bcListNucleosIncubadores } from 'src/app/shared/breadcrumb-items';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ColumnDataType, ITableColumnDisplay } from 'src/app/shared/components/table-striped/table-striped.component';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { Pagination, PaginationActions } from 'src/app/shared/models/pagination.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';

@Component({
  selector: 'app-list-nucleos-incubadores',
  templateUrl: './list-nucleos-incubadores.component.html',
  styleUrls: ['./list-nucleos-incubadores.component.scss']
})
export class ListNucleosIncubadoresComponent implements OnInit {

  columns: ITableColumnDisplay[] = [
    { name: 'Id', labelInDb: 'Id', type: ColumnDataType.Text },
    { name: 'Descrição', labelInDb: 'Descricao', type: ColumnDataType.Text },
  ]
  breadcrumbItems = bcListNucleosIncubadores;
  nucleos: NucleoIncubador[];
  termFilter: string;
  pagination: Pagination = new Pagination();

  private previousTermFilter: string;

  constructor(
    private readonly router: Router,
    private readonly nucleoService: NucleoIncubadorService,
    private readonly dialog: MatDialog,
    private readonly toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.searchData();
  }

  navigateToCreation(): void {
      this.router.navigateByUrl("/nucleo-incubador/editar");
  }

  navigateToEdit(nucleo: NucleoIncubador): void {
      this.router.navigateByUrl("/nucleo-incubador/editar/" + nucleo.Id);
  }

  deleteElement(nucleo: NucleoIncubador): void {
    const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Você tem certeza que deseja deletar o núcleo: ' + nucleo.Descricao
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.nucleoService.deleteNucleo(nucleo.Id).subscribe(() => {
          this.toastr.success('Núcleo deletado com sucesso')
          this.ngOnInit();
        })
      }
    });
  }

  paginateAction(ev: PaginationActions) {
    this.pagination.Page += ev;
    this.searchData();
  }

  searchData(): void {

    if (this.termFilter != this.previousTermFilter)
      this.pagination.Page = 1;

    this.nucleoService.getAllNucleos(this.pagination, this.termFilter).pipe(
      tap( res => {
        this.pagination.Page = res?.Page;
        this.pagination.PageSize = res?.PageSize;
        this.pagination.TotalCount = res?.TotalCount;
        this.pagination.TotalPages = res?.TotalPages;
        this.nucleos = res?.Data;
        this.previousTermFilter = this.termFilter;
      })
    )
    .subscribe();
  }

  exportData(): void {
    this.nucleoService.downloadExcel();
  }
}
