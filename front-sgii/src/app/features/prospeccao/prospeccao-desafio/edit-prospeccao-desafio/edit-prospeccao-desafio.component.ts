import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bcEditProspeccaoReuniao } from 'src/app/shared/breadcrumb-items';
import { mockedNucleos } from 'src/app/shared/mocks.util';
import { Participante } from 'src/app/shared/models/participante.model';
import { DesafioInovacao, IdeiaDesafioInovacao } from 'src/app/shared/models/prospeccao.model';

@Component({
  selector: 'app-edit-prospeccao-desafio',
  templateUrl: './edit-prospeccao-desafio.component.html',
  styleUrls: ['./edit-prospeccao-desafio.component.scss']
})
export class EditProspeccaoDesafioComponent implements OnInit {
    pageTitle: string;
    breadcrumbItems = bcEditProspeccaoReuniao;

    nucleos = mockedNucleos;

    desafioInovacao: DesafioInovacao = new DesafioInovacao();

    constructor(
        private route: ActivatedRoute,
        private toast: ToastrService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        
        this.pageTitle = (id) ? 'Edição de ação de sensibilização' : 'Criação de ação de sensibilização';
    }

    add(event: any, tipoInsercao: 'Participantes' | 'Ideias'): void {
        const value = (event.target.value || '').trim();
    
        if (!value) {
            event.target.value = '';
            return;
        }
    
        if (tipoInsercao === 'Participantes') {
            const participante: Participante = { Nome: value };
            this.desafioInovacao.Participantes.push(participante);
            this.toast.success('Participante adicionado à ação');
        } else if (tipoInsercao === 'Ideias') {
            const ideia: IdeiaDesafioInovacao = { Ideia: value };
            this.desafioInovacao.Ideias.push(ideia);
            this.toast.success('Ideia adicionada à ação');
        }
    
        event.target.value = '';
    }

    remove(target: Participante | IdeiaDesafioInovacao, tipoDelecao: 'Participantes' | 'Ideias'): void {
        if (tipoDelecao === 'Participantes') {
            const index = this.desafioInovacao.Participantes.indexOf(target as Participante);
            if (index > -1) {
                this.desafioInovacao.Participantes.splice(index, 1);
                this.toast.success('Participante removido!');
            }
        } else if (tipoDelecao === 'Ideias') {
            const index = this.desafioInovacao.Ideias.indexOf(target as IdeiaDesafioInovacao);
            if (index > -1) {
                this.desafioInovacao.Ideias.splice(index, 1);
                this.toast.success('Ideia removida!');
            }
        }
    }
}
