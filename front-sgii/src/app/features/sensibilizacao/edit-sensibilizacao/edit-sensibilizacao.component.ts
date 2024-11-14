import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bcEditSensibilizacao } from 'src/app/shared/breadcrumb-items';
import { mockedNucleos } from 'src/app/shared/mocks.util';
import { ParticipanteSensibilizacao, Sensibilizacao, TiposAcaoSensibilizacao } from 'src/app/shared/models/sensibilizacao.model';

@Component({
    selector: 'edit-sensibilizacao',
    templateUrl: 'edit-sensibilizacao.component.html',
    styleUrls: ['edit-sensibilizacao.component.scss']
})

export class EditSensibilizacaoComponent implements OnInit {

    pageTitle: string;
    breadcrumbItems = bcEditSensibilizacao;

    nucleos = mockedNucleos;

    sensibilizacao: Sensibilizacao = new Sensibilizacao();

    public tiposSensibilizacao = TiposAcaoSensibilizacao;

    constructor(
        private route: ActivatedRoute,
        private toast: ToastrService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        
        this.pageTitle = (id) ? 'Edição de ação de sensibilização' : 'Criação de ação de sensibilização';
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

        const participante: ParticipanteSensibilizacao = {
            Nome: value
        }
        this.sensibilizacao.Participantes.push(participante);

        event.target.value = '';
        this.toast.success('Participante adicionado à ação');
    }

    removeParticipante(participante: ParticipanteSensibilizacao) {
        const index = this.sensibilizacao.Participantes?.indexOf(participante) || 0;
        if (index > -1) {
            this.sensibilizacao.Participantes?.splice(index, 1);
        }
		
		this.toast.success('Participante removido!');
    }
}