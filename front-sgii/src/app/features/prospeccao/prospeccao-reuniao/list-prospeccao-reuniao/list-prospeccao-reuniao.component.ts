import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcListProspeccaoReuniao } from 'src/app/shared/breadcrumb-items';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ColumnDataType, ITableColumnDisplay } from 'src/app/shared/components/table-striped/table-striped.component';
import { Pagination, PaginationActions } from 'src/app/shared/models/pagination.model';
import { ReuniaoProspeccao } from 'src/app/shared/models/prospeccao.model';
import { ReuniaoProspeccaoService } from 'src/app/shared/services/reuniao-prospeccao.service';

@Component({
  selector: 'app-list-prospeccao-reuniao',
  templateUrl: './list-prospeccao-reuniao.component.html',
  styleUrls: ['./list-prospeccao-reuniao.component.scss']
})
export class ListProspeccaoReuniaoComponent {

  columns: ITableColumnDisplay[] = [
    { name: 'Id', labelInDb: 'Id', type: ColumnDataType.Text },
    { name: 'Tema', labelInDb: 'TemaAcao', type: ColumnDataType.Text },
    { name: 'Local', labelInDb: 'Local', type: ColumnDataType.Text },
    { name: 'Data Ação', labelInDb: 'DataAcao', type: ColumnDataType.Date }
];

  breadcrumbItems = bcListProspeccaoReuniao;

  termFilter: string;    
  private previousTermFilter: string;
  pagination: Pagination = new Pagination();

  reunioes: ReuniaoProspeccao[];	

  constructor(
    private router: Router,
    private readonly reuniaoService: ReuniaoProspeccaoService,
    private readonly dialog: MatDialog,
    private readonly toastr: ToastrService
  ) { }
  
  ngOnInit(): void { 
    this.searchData();
  }

  navigateToCreation(): void {
      this.router.navigateByUrl("prospeccao/reuniao/editar");
  }

  navigateToEdit(reuniao: any) {
    this.router.navigateByUrl("prospeccao/reuniao/editar/" + reuniao.Id);
  }

  searchData(): void {
      if (this.termFilter != this.previousTermFilter)
          this.pagination.Page = 1;

      this.reuniaoService.getAllReunioes(this.pagination, this.termFilter).pipe(
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

  deleteElement(reuniao: ReuniaoProspeccao): void {
      const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
          data: {
          message: 'Você tem certeza que deseja deletar o núcleo: ' + reuniao.TemaAcao
          }
      });
      confirmDialog.afterClosed().subscribe(result => {
          if (result === true) {
          this.reuniaoService.deleteReuniaoProspeccao(reuniao.Id).subscribe(() => {
              this.toastr.success('Reunião de Prospecção deletada com sucesso')
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
