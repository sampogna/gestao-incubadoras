import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcListSensibilizacao } from 'src/app/shared/breadcrumb-items';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ColumnDataType, ITableColumnDisplay } from 'src/app/shared/components/table-striped/table-striped.component';
import { Pagination, PaginationActions } from 'src/app/shared/models/pagination.model';
import { Sensibilizacao } from 'src/app/shared/models/sensibilizacao.model';
import { SensibilizacaoService } from 'src/app/shared/services/sensibilizacao.service';

@Component({
    selector: 'list-sensibilizacao',
    templateUrl: 'list-sensibilizacao.component.html',
    styleUrls: ['list-sensibilizacao.component.scss']
})

export class ListSensibilizacaoComponent implements OnInit {

    columns: ITableColumnDisplay[] = [
        { name: 'Id', labelInDb: 'Id', type: ColumnDataType.Text },
        { name: 'Tema', labelInDb: 'Tema', type: ColumnDataType.Text },
        { name: 'Local', labelInDb: 'Local', type: ColumnDataType.Text },
        { name: 'Perfil', labelInDb: 'Perfil', type: ColumnDataType.Text },
        { name: 'Número Sensibilizados', labelInDb: 'NumeroSensibilizados', type: ColumnDataType.Text },
        { name: 'Data Ação', labelInDb: 'DataAcao', type: ColumnDataType.Date }
    ];

    breadcrumbItems = bcListSensibilizacao;
    sensibilizacoes: Sensibilizacao[];
    termFilter: string;
    pagination: Pagination = new Pagination();
    
    private previousTermFilter: string;

    constructor(
        private router: Router,
        private readonly sensibilizacaoService: SensibilizacaoService,
        private readonly dialog: MatDialog,
        private readonly toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.searchData();
    }

    navigateToCreation(): void {
        this.router.navigateByUrl("/sensibilizacao/editar");
    }

    navigateToEdit(sensibilizacao: any) {
        this.router.navigateByUrl("/sensibilizacao/editar/" + sensibilizacao.Id);
    }

    deleteElement(sensibilizacao: Sensibilizacao): void {
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: {
            message: 'Você tem certeza que deseja deletar o núcleo: ' + sensibilizacao.Tema
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
                this.sensibilizacaoService.deleteSensibilizacao(sensibilizacao.Id).subscribe(() => {
                    this.toastr.success('Sensibilização deletada com sucesso')
                    this.ngOnInit();
                })
            }
        });
    }
    
    paginateAction(ev: PaginationActions): void {
        this.pagination.Page += ev;
        this.searchData();
    }

    searchData(): void {
        if (this.termFilter != this.previousTermFilter)
            this.pagination.Page = 1;

        this.sensibilizacaoService.getAllSensibilizacoes(this.pagination, this.termFilter).pipe(
            tap( res => {
            this.pagination.Page = res?.Page;
            this.pagination.PageSize = res?.PageSize;
            this.pagination.TotalCount = res?.TotalCount;
            this.pagination.TotalPages = res?.TotalPages;
            this.sensibilizacoes = res?.Data;
            this.previousTermFilter = this.termFilter;
            })
        )
        .subscribe();
    }

    exportData(): void {
        this.sensibilizacaoService.downloadExcel();
    }
}