import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcEditNucleoIncubador } from 'src/app/shared/breadcrumb-items';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';

@Component({
  selector: 'app-edit-nucleos-incubadores',
  templateUrl: './edit-nucleos-incubadores.component.html',
  styleUrls: ['./edit-nucleos-incubadores.component.scss']
})
export class EditNucleosIncubadoresComponent implements OnInit {

  pageTitle: string;

  breadcrumbItems = bcEditNucleoIncubador;

  nucleoIncubador: NucleoIncubador = new NucleoIncubador();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly nucleoService: NucleoIncubadorService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    

    if (id)
      this.getCurrentNucleo(id);

    this.pageTitle = (id) ? 'Edição de núcleo incubador' : 'Criação de núcleo incubador';
  }

  getCurrentNucleo(id: number): void {
    this.nucleoService
      .getNucleoById(id)
      .pipe(
        tap(nucleo => {
          this.nucleoIncubador = nucleo;
          
        })
      )
      .subscribe();
  }

  handlePersistence(): void {
    if (this.nucleoIncubador?.Id) this.persistEdition();
    else this.persistCreate();
  }

  persistEdition() {
    this.nucleoService.updateNucleo(this.nucleoIncubador)
    .pipe(
      tap(() => this.toastr.success('Núcleo atualizado com sucesso!'))
    )
    .subscribe();
  }

  persistCreate() {
    this.nucleoService.createNucleo(this.nucleoIncubador)
    .pipe(
      tap(
        nucleoCriado => {
          if (nucleoCriado.Id) {
            this.toastr.success('Núcleo criado com sucesso!');
            this.nucleoIncubador = nucleoCriado;
          }
          
        }
      )
    )
    .subscribe();
  }
}
