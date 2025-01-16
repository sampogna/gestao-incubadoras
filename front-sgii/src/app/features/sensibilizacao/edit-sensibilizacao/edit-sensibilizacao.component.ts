import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcEditSensibilizacao } from 'src/app/shared/breadcrumb-items';
import { mockedNucleos } from 'src/app/shared/mocks.util';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { Participante } from 'src/app/shared/models/participante.model';
import { Sensibilizacao, TiposAcaoSensibilizacao } from 'src/app/shared/models/sensibilizacao.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';
import { SensibilizacaoService } from 'src/app/shared/services/sensibilizacao.service';

@Component({
    selector: 'edit-sensibilizacao',
    templateUrl: 'edit-sensibilizacao.component.html',
    styleUrls: ['edit-sensibilizacao.component.scss']
})

export class EditSensibilizacaoComponent implements OnInit {

    pageTitle: string;
    breadcrumbItems = bcEditSensibilizacao;
    sensibilizacao: Sensibilizacao = new Sensibilizacao();
    public tiposSensibilizacao = TiposAcaoSensibilizacao;
    nucleos: NucleoIncubador[] = [];

    constructor(
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private readonly nucleoService: NucleoIncubadorService,
        private readonly sensibilizacaoService: SensibilizacaoService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        
        this.pageTitle = (id) ? 'Edição de ação de sensibilização' : 'Criação de ação de sensibilização';

        this.getAllNucleos();
    }

    add(event: any): void {
        const value = (event.target.value || '').trim();

        if (!value) {
            event.target.value = '';
            return;
        }

        if (!this.sensibilizacao.Participantes) {
            this.sensibilizacao.Participantes = [];
        }

        const participante: Participante = {
            Nome: value
        }
        this.sensibilizacao.Participantes.push(participante);

        event.target.value = '';
        this.toastr.success('Participante adicionado à ação');
    }

    removeParticipante(participante: Participante): void {
        const index = this.sensibilizacao.Participantes?.indexOf(participante) || 0;
        if (index > -1) {
            this.sensibilizacao.Participantes?.splice(index, 1);
        }
		
		this.toastr.success('Participante removido!');
    }

    getAllNucleos(): void {
        this.nucleoService.getAllNucleosNonPaginated()
            .pipe(
                tap(nucleos => this.nucleos = nucleos)
            )
            .subscribe();
    }

    persistCreate(): void {
        this.sensibilizacaoService.createSensibilizacao(this.sensibilizacao)
        .pipe(
            tap(
            nucleoCriado => {
                if (nucleoCriado.Id) {
                this.toastr.success('Núcleo criado com sucesso!');
                this.sensibilizacao = nucleoCriado;
                }
                
            }
            )
        )
        .subscribe();
    }
}