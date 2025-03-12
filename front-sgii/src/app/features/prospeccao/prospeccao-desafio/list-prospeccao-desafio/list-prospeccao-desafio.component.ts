import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcListProspeccaoDesafio, bcListProspeccaoReuniao } from 'src/app/shared/breadcrumb-items';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ColumnDataType, ITableColumnDisplay } from 'src/app/shared/components/table-striped/table-striped.component';
import { Pagination, PaginationActions } from 'src/app/shared/models/pagination.model';
import { DesafioInovacao, ReuniaoProspeccao } from 'src/app/shared/models/prospeccao.model';
import { DesafioProspeccaoService } from 'src/app/shared/services/desafio-prospeccao.service';

@Component({
  selector: 'app-list-prospeccao-desafio',
  templateUrl: './list-prospeccao-desafio.component.html',
  styleUrls: ['./list-prospeccao-desafio.component.scss']
})
export class ListProspeccaoDesafioComponent {

  columns: ITableColumnDisplay[] = [
    { name: 'Id', labelInDb: 'Id', type: ColumnDataType.Text },
    { name: 'Titulo', labelInDb: 'Titulo', type: ColumnDataType.Text },
    { name: 'Local', labelInDb: 'Local', type: ColumnDataType.Text },
    { name: 'Número Oportunidades', labelInDb: 'NumeroOportunidades', type: ColumnDataType.Text },
    { name: 'Data Início', labelInDb: 'DataInicio', type: ColumnDataType.Date },
    { name: 'Data Final', labelInDb: 'DataFinal', type: ColumnDataType.Date }
];

  breadcrumbItems = bcListProspeccaoDesafio;

  termFilter: string;    
  private previousTermFilter: string;
  pagination: Pagination = new Pagination();

  reunioes: DesafioInovacao[];	

  constructor(
    private router: Router,
    private readonly desafioService: DesafioProspeccaoService,
    private readonly dialog: MatDialog,
    private readonly toastr: ToastrService
  ) { }
  
  ngOnInit(): void { 
    this.searchData();
  }

  navigateToCreation(): void {
      this.router.navigateByUrl("prospeccao/desafio/editar");
  }

  navigateToEdit(desafio: any) {
    this.router.navigateByUrl("prospeccao/desafio/editar/" + desafio.Id);
  }

  searchData(): void {
      if (this.termFilter != this.previousTermFilter)
          this.pagination.Page = 1;

      this.desafioService.getAllDesafios(this.pagination, this.termFilter).pipe(
          tap( res => {
            this.pagination.Page = res?.Page;
            this.pagination.PageSize = res?.PageSize;
            this.pagination.TotalCount = res?.TotalCount;
            this.pagination.TotalPages = res?.TotalPages;
            this.reunioes = res?.Data;
            this.previousTermFilter = this.termFilter;
          })
      )
      .subscribe();
  }

  deleteElement(desafio: ReuniaoProspeccao): void {
      const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
          data: {
          message: 'Você tem certeza que deseja deletar o desafio: ' + desafio.TemaAcao
          }
      });
      confirmDialog.afterClosed().subscribe(result => {
          if (result === true) {
          this.desafioService.deleteDesafioInovacao(desafio.Id).subscribe(() => {
              this.toastr.success('Desaf de Prospecção deletada com sucesso')
              this.ngOnInit();
          })
          }
      });
  }
  
  paginateAction(ev: PaginationActions): void {
      this.pagination.Page += ev;
      this.searchData();
  }
}
