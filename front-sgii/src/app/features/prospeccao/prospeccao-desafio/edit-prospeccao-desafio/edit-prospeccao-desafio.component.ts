import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcEditProspeccaoDesafio } from 'src/app/shared/breadcrumb-items';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { Participante } from 'src/app/shared/models/participante.model';
import { DesafioInovacao, IdeiaDesafioInovacao, ImagemDesafioInovacao } from 'src/app/shared/models/prospeccao.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';
import { DesafioProspeccaoService } from 'src/app/shared/services/desafio-prospeccao.service';
import { convertDateStringToDateObject } from 'src/app/shared/utils/date';

@Component({
  selector: 'app-edit-prospeccao-desafio',
  templateUrl: './edit-prospeccao-desafio.component.html',
  styleUrls: ['./edit-prospeccao-desafio.component.scss']
})
export class EditProspeccaoDesafioComponent implements OnInit {
    pageTitle: string;
    breadcrumbItems = bcEditProspeccaoDesafio;

    nucleos: NucleoIncubador[] = [];

    desafio: DesafioInovacao = new DesafioInovacao();

    registrosFotograficos: ImagemDesafioInovacao[] = [];

    constructor(
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private readonly desafioService: DesafioProspeccaoService,
        private readonly nucleoService: NucleoIncubadorService,
        private readonly router: Router
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        
        this.getAllNucleos();

        if (id) this.getCurrentReuniao(id);

        this.pageTitle = (id) ? 'Edição de desafio da inovação' : 'Criação de desafio da inovação';

        
    }

    getCurrentReuniao(id: number): void {
        this.desafioService
            .getDesafioInovacaoById(id)
            .pipe(
                tap(desafioProspeccao => this.desafio = desafioProspeccao),
                tap(desafioProspeccao => this.registrosFotograficos = desafioProspeccao.ImagemDesafioInovacaos)
            )
            .subscribe();
    }

    getAllNucleos(): void {
        this.nucleoService.getAllNucleosNonPaginated()
            .pipe(
                tap(nucleos => this.nucleos = nucleos)
            )
            .subscribe();
    }

    addParticipante(event: any): void {
        const value = (event.target.value || '').trim();

        if (!value) {
            event.target.value = '';
            return;
        }

        if (!this.desafio.ParticipanteDesafioInovacaos) {
            this.desafio.ParticipanteDesafioInovacaos = [];
        }

        const participante: Participante = {
            Nome: value
        }
        this.desafio.ParticipanteDesafioInovacaos.push(participante);

        event.target.value = '';
        this.toastr.success('Participante adicionado à ação');
    }

    removeParticipante(participante: Participante): void {
        const index = this.desafio.ParticipanteDesafioInovacaos?.indexOf(participante) || 0;
        if (index > -1) {
            this.desafio.ParticipanteDesafioInovacaos?.splice(index, 1);
        }
		
		this.toastr.success('Participante removido!');
    }

    addIdeia(event: any): void {
        const value = (event.target.value || '').trim();

        if (!value) {
            event.target.value = '';
            return;
        }

        if (!this.desafio.IdeiaDesafioInovacaos) {
            this.desafio.IdeiaDesafioInovacaos = [];
        }

        const ideia: IdeiaDesafioInovacao = {
            Ideia: value
        }
        this.desafio.IdeiaDesafioInovacaos.push(ideia);

        event.target.value = '';
        this.toastr.success('Participante adicionado à ação');
    }


    removeIdeia(ideia: IdeiaDesafioInovacao): void {
        const index = this.desafio.IdeiaDesafioInovacaos?.indexOf(ideia) || 0;
        if (index > -1) {
            this.desafio.IdeiaDesafioInovacaos?.splice(index, 1);
        }
		
		this.toastr.success('Participante removido!');
    }

    handleFileUploaded(file: File): void {

        const reader = new FileReader();

        reader.onload = () => {
            const base64String = (reader.result as string).split(',')[1];
            this.desafio.ImagemDesafioInovacaos.push({ ArquivoBase64: base64String, Nome: file.name });
        }

        reader.readAsDataURL(file);

        this.registrosFotograficos = this.desafio.ImagemDesafioInovacaos;

    }
  
    handleFileDeleted(file: ImagemDesafioInovacao): void {
        const index = this.desafio.ImagemDesafioInovacaos.indexOf(file);
        if (index !== -1) {
            this.desafio.ImagemDesafioInovacaos.splice(index, 1);
        }
    }

    assertDates(): void {
        if (this.desafio.DataInicioStr?.length > 0)
            this.desafio.DataInicio = convertDateStringToDateObject(this.desafio.DataInicioStr);
        else
            this.desafio.DataInicio = new Date();

        if (this.desafio.DataFinalStr?.length > 0)
            this.desafio.DataFinal = convertDateStringToDateObject(this.desafio.DataFinalStr);
        else
            this.desafio.DataFinal = new Date();
    }

    handlePersistence(): void {
        this.assertDates();

        if (this.desafio?.Id) this.persistEdition();
        else this.persistCreate();
    }

    persistEdition(): void {

        this.desafioService.updateDesafioInovacao(this.desafio)
        .pipe(
            tap(() => this.toastr.success('Desafio de prospecção atualizada com sucesso!'))
        )
        .subscribe();
    }

    persistCreate(): void {

        this.desafioService.createDesafioInovacao(this.desafio)
        .pipe(
            tap(
                desafioProspeccaoCriada => {
                    if (desafioProspeccaoCriada.Id) {
                        this.toastr.success('Desafio de prospecção criada com sucesso!');
                        this.router.navigateByUrl('prospeccao/desafio/editar/' + desafioProspeccaoCriada.Id);
                    }
                }
            )
        )
        .subscribe();
    }
}
