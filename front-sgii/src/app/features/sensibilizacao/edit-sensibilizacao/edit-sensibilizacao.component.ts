import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcEditSensibilizacao } from 'src/app/shared/breadcrumb-items';
import { mockedNucleos } from 'src/app/shared/mocks.util';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { Participante } from 'src/app/shared/models/participante.model';
import { ImagemSensibilizacao, Sensibilizacao, TiposAcaoSensibilizacao, TiposImagemSensibilizacao } from 'src/app/shared/models/sensibilizacao.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';
import { SensibilizacaoService } from 'src/app/shared/services/sensibilizacao.service';
import { convertDateStringToDateObject } from 'src/app/shared/utils/date';

@Component({
    selector: 'edit-sensibilizacao',
    templateUrl: 'edit-sensibilizacao.component.html',
    styleUrls: ['edit-sensibilizacao.component.scss']
})

export class EditSensibilizacaoComponent implements OnInit {

    pageTitle: string;
    breadcrumbItems = bcEditSensibilizacao;
    sensibilizacao: Sensibilizacao = new Sensibilizacao();
    tiposSensibilizacao = TiposAcaoSensibilizacao;
    nucleos: NucleoIncubador[] = [];

    listaParticipantesFileB64: string;

    readonly tiposImagemSensibilizacao = TiposImagemSensibilizacao;

    listaParticipantes: ImagemSensibilizacao[] = [];
    registrosFotograficos: ImagemSensibilizacao[] = [];

    constructor(
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private readonly nucleoService: NucleoIncubadorService,
        private readonly sensibilizacaoService: SensibilizacaoService,
        private readonly router: Router
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        
        this.getAllNucleos();

        if (id) this.getCurrentSensibilizacao(id);

        this.pageTitle = (id) ? 'Edição de ação de sensibilização' : 'Criação de ação de sensibilização';
    }

    getCurrentSensibilizacao(id: number): void {
        this.sensibilizacaoService
            .getSensibilizacaoById(id)
            .pipe(
                tap(sensibilizacao => this.sensibilizacao = sensibilizacao),
                tap(() => this.assertFileTypesArray())
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

    add(event: any): void {
        const value = (event.target.value || '').trim();

        if (!value) {
            event.target.value = '';
            return;
        }

        if (!this.sensibilizacao.ParticipanteSensibilizacaos) {
            this.sensibilizacao.ParticipanteSensibilizacaos = [];
        }

        const participante: Participante = {
            Nome: value
        }
        this.sensibilizacao.ParticipanteSensibilizacaos.push(participante);

        event.target.value = '';
        this.toastr.success('Participante adicionado à ação');
    }

    removeParticipante(participante: Participante): void {
        const index = this.sensibilizacao.ParticipanteSensibilizacaos?.indexOf(participante) || 0;
        if (index > -1) {
            this.sensibilizacao.ParticipanteSensibilizacaos?.splice(index, 1);
        }
		
		this.toastr.success('Participante removido!');
    }

    handlePersistence(): void {
        if (this.sensibilizacao.DataAcaoStr?.length > 0)
            this.sensibilizacao.DataAcao = convertDateStringToDateObject(this.sensibilizacao.DataAcaoStr);
        else
            this.sensibilizacao.DataAcao = new Date();

        if (this.sensibilizacao?.Id) this.persistEdition();
        else this.persistCreate();
    }

    persistEdition(): void {

        this.sensibilizacaoService.updateSensibilizacao(this.sensibilizacao)
        .pipe(
          tap(() => this.toastr.success('Sensibilização atualizada com sucesso!'))
        )
        .subscribe();
    }

    persistCreate(): void {

        this.sensibilizacaoService.createSensibilizacao(this.sensibilizacao)
        .pipe(
            tap(
                sensibilizacaoCriada => {
                    if (sensibilizacaoCriada.Id) {
                        this.toastr.success('Sensibilização criada com sucesso!');
                        this.router.navigateByUrl('sensibilizacao/editar/' + sensibilizacaoCriada.Id);
                    }
                }
            )
        )
        .subscribe();
    }

    handleFileUploaded(file: File, tipo: TiposImagemSensibilizacao): void {

        const reader = new FileReader();

        reader.onload = () => {
            const base64String = (reader.result as string).split(',')[1];
            console.log('file', file);
            this.sensibilizacao.ImagemSensibilizacaos.push({ ArquivoBase64: base64String, Nome: file.name, Tipo: tipo });
            this.assertFileTypesArray();
        }

        reader.readAsDataURL(file);

    }

    handleFileDeleted(file: ImagemSensibilizacao): void {
        const index = this.sensibilizacao.ImagemSensibilizacaos.indexOf(file);
        if (index !== -1) {
          this.sensibilizacao.ImagemSensibilizacaos.splice(index, 1);
        }

        this.assertFileTypesArray();
    }

    assertFileTypesArray(): void {
        this.listaParticipantes = this.sensibilizacao.ImagemSensibilizacaos.filter(s => s.Tipo == this.tiposImagemSensibilizacao.ListaParticipantes)
        this.registrosFotograficos = this.sensibilizacao.ImagemSensibilizacaos.filter(s => s.Tipo == this.tiposImagemSensibilizacao.RegistroFotografico)
    }
}