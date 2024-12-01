import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bcEditProspeccaoReuniao } from 'src/app/shared/breadcrumb-items';
import { mockedNucleos } from 'src/app/shared/mocks.util';
import { Participante } from 'src/app/shared/models/participante.model';
import { ReuniaoProspeccao, TiposAcaoReuniao, TiposReuniaoSelectItems } from 'src/app/shared/models/prospeccao.model';

@Component({
  selector: 'app-edit-prospeccao-reuniao',
  templateUrl: './edit-prospeccao-reuniao.component.html',
  styleUrls: ['./edit-prospeccao-reuniao.component.scss']
})
export class EditProspeccaoReuniaoComponent {
  pageTitle: string;
  breadcrumbItems = bcEditProspeccaoReuniao;

  nucleos = mockedNucleos;

  reuniao: ReuniaoProspeccao = new ReuniaoProspeccao();

  public tiposReuniao = TiposAcaoReuniao;
  public tipoReuniaoSelectIems = TiposReuniaoSelectItems;

  constructor(
      private route: ActivatedRoute,
      private toast: ToastrService
  ) { }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      
      this.pageTitle = (id) ? 'Edição de reunião de prospecção' : 'Criação de reunião de prospecção';
  }

  add(event: any): void {
      const value = (event.target.value || '').trim();

      if (!value) {
          event.target.value = '';
          return;
      }

      if (!this.reuniao.Participantes) {
          this.reuniao.Participantes = [];
      }

      const participante: Participante = {
          Nome: value
      }
      this.reuniao.Participantes.push(participante);

      event.target.value = '';
      this.toast.success('Participante adicionado à ação');
  }

  removeParticipante(participante: Participante) {
      const index = this.reuniao.Participantes?.indexOf(participante) || 0;
      if (index > -1) {
          this.reuniao.Participantes?.splice(index, 1);
      }
  
  this.toast.success('Participante removido!');
  }
}
