import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { bcEditProspeccaoReuniao } from 'src/app/shared/breadcrumb-items';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';
import { Participante } from 'src/app/shared/models/participante.model';
import { EstagiosMaturidadeSelectItems, ImagemReuniaoProspeccao, ParticipanteReuniaoProspeccao, ReuniaoProspeccao, TiposAcaoReuniao, TiposReuniaoSelectItems } from 'src/app/shared/models/prospeccao.model';
import { NucleoIncubadorService } from 'src/app/shared/services/nucleo-incubador.service';
import { ReuniaoProspeccaoService } from 'src/app/shared/services/reuniao-prospeccao.service';
import { convertDateStringToDateObject } from 'src/app/shared/utils/date';

@Component({
  selector: 'app-edit-prospeccao-reuniao',
  templateUrl: './edit-prospeccao-reuniao.component.html',
  styleUrls: ['./edit-prospeccao-reuniao.component.scss']
})
export class EditProspeccaoReuniaoComponent implements OnInit {
    pageTitle: string;
    breadcrumbItems = bcEditProspeccaoReuniao;

    nucleos: NucleoIncubador[] = [];

    reuniao: ReuniaoProspeccao = new ReuniaoProspeccao();

    tiposReuniao = TiposAcaoReuniao;
    tipoReuniaoSelectIems = TiposReuniaoSelectItems;
    estagiosMaturidadeSelectItems = EstagiosMaturidadeSelectItems;

    registrosFotograficos: ImagemReuniaoProspeccao[] = [];

    participanteReuniao: ParticipanteReuniaoProspeccao = new ParticipanteReuniaoProspeccao();

    constructor(
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private readonly reuniaoService: ReuniaoProspeccaoService,
        private readonly nucleoService: NucleoIncubadorService,
        private readonly router: Router
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        
        this.getAllNucleos();

        if (id) this.getCurrentReuniao(id);

        this.pageTitle = (id) ? 'Edição de reunião de prospecção' : 'Criação de reunião de prospecção';

        
    }

    getCurrentReuniao(id: number): void {
        this.reuniaoService
            .getReuniaoProspeccaoById(id)
            .pipe(
                tap(reuniaoProspeccao => this.reuniao = reuniaoProspeccao),
                tap(reuniaoProspeccao => this.registrosFotograficos = reuniaoProspeccao.ImagemReuniaoProspeccaos)
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

        let nameValue = (this.participanteReuniao.NomeParticipante || '').trim();

        if (!nameValue) {
            nameValue = '';
        }

        let contactValue = (this.participanteReuniao.Contato || '').trim();

        if (!contactValue) {
            contactValue = '';
        }

        if (!this.reuniao.ParticipanteReuniaoProspeccaos) {
            this.reuniao.ParticipanteReuniaoProspeccaos = [];
        }

        const participante: ParticipanteReuniaoProspeccao = {
            NomeParticipante: nameValue,
            Contato: contactValue
        }
        this.reuniao.ParticipanteReuniaoProspeccaos.push(participante);

        this.participanteReuniao = new ParticipanteReuniaoProspeccao();

        this.toastr.success('Participante adicionado à ação');

    }

    removeParticipante(participante: Participante) {
        const index = this.reuniao.ParticipanteReuniaoProspeccaos?.indexOf(participante) || 0;
        if (index > -1) {
            this.reuniao.ParticipanteReuniaoProspeccaos?.splice(index, 1);
        }
        
        this.toastr.success('Participante removido!');
    }

    handleFileUploaded(file: File): void {

        const reader = new FileReader();

        reader.onload = () => {
            const base64String = (reader.result as string).split(',')[1];
            this.reuniao.ImagemReuniaoProspeccaos.push({ ArquivoBase64: base64String, Nome: file.name });
        }

        reader.readAsDataURL(file);

        this.registrosFotograficos = this.reuniao.ImagemReuniaoProspeccaos;

    }
  
    handleFileDeleted(file: ImagemReuniaoProspeccao): void {
        const index = this.reuniao.ImagemReuniaoProspeccaos.indexOf(file);
        if (index !== -1) {
            this.reuniao.ImagemReuniaoProspeccaos.splice(index, 1);
        }
    }

    handlePersistence(): void {
        if (this.reuniao.DataAcaoStr?.length > 0)
            this.reuniao.DataAcao = convertDateStringToDateObject(this.reuniao.DataAcaoStr);
        else
            this.reuniao.DataAcao = new Date();

        if (this.reuniao?.Id) this.persistEdition();
        else this.persistCreate();
    }

    persistEdition(): void {

        this.reuniaoService.updateReuniaoProspeccao(this.reuniao)
        .pipe(
            tap(() => this.toastr.success('Reunião de prospecção atualizada com sucesso!'))
        )
        .subscribe();
    }

    persistCreate(): void {

        this.reuniaoService.createReuniaoProspeccao(this.reuniao)
        .pipe(
            tap(
                reuniaoProspeccaoCriada => {
                    if (reuniaoProspeccaoCriada.Id) {
                        this.toastr.success('Reunião de prospecção criada com sucesso!');
                        this.router.navigateByUrl('prospeccao/reuniao/editar/' + reuniaoProspeccaoCriada.Id);
                    }
                }
            )
        )
        .subscribe();
    }
}
