import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs';
import { bcListUsuario } from 'src/app/shared/breadcrumb-items';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ColumnDataType, ITableColumnDisplay } from 'src/app/shared/components/table-striped/table-striped.component';
import { PaginatedResult, Pagination, PaginationActions } from 'src/app/shared/models/pagination.model';
import { TipoStringMapper, Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent {

    columns: ITableColumnDisplay[] = [
        { name: 'Id', labelInDb: 'Id', type: ColumnDataType.Text },
        { name: 'Nome', labelInDb: 'Nome', type: ColumnDataType.Text },
        { name: 'Sobrenome', labelInDb: 'Sobrenome', type: ColumnDataType.Text },
        { name: 'Cargo', labelInDb: 'Tipo', type: ColumnDataType.Text },
        { name: 'Núcleo', labelInDb: 'StrNucleoIncubador', type: ColumnDataType.Text },
    ]

    breadcrumbItems = bcListUsuario;
    usuarios: Usuario[];
    termFilter: string;
    pagination: Pagination = new Pagination();
    
    private previousTermFilter: string;

    constructor(
        private router: Router,
        private readonly usuarioService: UsuarioService,
        private readonly dialog: MatDialog,
        private readonly toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.searchData();
    }

    navigateToCreation(): void {
        this.router.navigateByUrl("/usuario/editar");
    }

    navigateToEdit(usuario: any) {
        this.router.navigateByUrl("/usuario/editar/" + usuario.Id);
    }

    deleteElement(usuario: Usuario): void {
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: {
            message: 'Você tem certeza que deseja deletar o usuário: ' + usuario.Nome
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
            this.usuarioService.deleteUsuario(usuario.Id).subscribe(() => {
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

        this.usuarioService.getAllUsuarios(this.pagination, this.termFilter).pipe(
            map((res) => ({...res, Data: res.Data.map(u => ({...u, Tipo: TipoStringMapper[u.IdTipo], StrNucleoIncubador: u.NucleoIncubador?.Descricao}))})
            ),
            tap( res => {
                this.pagination.Page = res?.Page;
                this.pagination.PageSize = res?.PageSize;
                this.pagination.TotalCount = res?.TotalCount;
                this.pagination.TotalPages = res?.TotalPages;
                this.usuarios = res?.Data;
                this.previousTermFilter = this.termFilter;
            })
        )
        .subscribe();
    }

    exportData(): void {
        this.usuarioService.downloadExcel();
    }
}
