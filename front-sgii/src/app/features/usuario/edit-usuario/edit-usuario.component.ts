import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcEditUsuario } from 'src/app/shared/breadcrumb-items';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { TipoUsuario, Usuario } from 'src/app/shared/models/usuario.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit{
  pageTitle: string;

  breadcrumbItems = bcEditUsuario;

  usuario: Usuario = new Usuario();

  nucleos: NucleoIncubador[] = [];

  tiposUsuario = TipoUsuario;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly usuarioService: UsuarioService,
    private readonly toastr: ToastrService,
    private readonly nucleoService: NucleoIncubadorService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    
    this.getAllNucleos();

    if (id)
      this.getCurrentUsuario(id);

    this.pageTitle = (id) ? 'Edição de usuário' : 'Criação de usuário';
  }

  getAllNucleos(): void {
    this.nucleoService.getAllNucleosNonPaginated()
        .pipe(
            tap(nucleos => this.nucleos = nucleos)
        )
        .subscribe();
  }

  getCurrentUsuario(id: number): void {
    this.usuarioService
      .getUsuarioById(id)
      .pipe(
        tap(usuario => {
          this.usuario = usuario;
          
        })
      )
      .subscribe();
  }

  handlePersistence(): void {
    if (this.usuario?.Id) this.persistEdition();
    else this.persistCreate();
  }

  persistEdition() {
    this.usuarioService.updateUsuario(this.usuario)
    .pipe(
      tap(() => this.toastr.success('Usuário atualizado com sucesso!'))
    )
    .subscribe();
  }

  persistCreate(): void {
    this.usuarioService.createUsuario(this.usuario)
    .pipe(
      tap(
        usuarioCriado => {
          if (usuarioCriado.Id) {
            this.toastr.success('Usuário criado com sucesso!');
            this.usuario = usuarioCriado;
          }
          
        }
      )
    )
    .subscribe();
  }
}
