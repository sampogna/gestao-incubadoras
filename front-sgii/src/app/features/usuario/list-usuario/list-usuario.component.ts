import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcListUsuario } from 'src/app/shared/breadcrumb-items';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { Pagination, PaginationActions } from 'src/app/shared/models/pagination.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent {
    columns = ['Id', 'Nome', 'Sobrenome'];

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
}
