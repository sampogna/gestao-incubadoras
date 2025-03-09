import { Pipe, PipeTransform } from '@angular/core';
import { ParticipanteReuniaoProspeccao } from '../models/prospeccao.model';

@Pipe({
    name: 'resolveParticipantDescription'
})

export class ResolveParticipantDescriptionPipe implements PipeTransform {

    transform(participante: ParticipanteReuniaoProspeccao): string {
        let strParticipante = ''
        if (participante.Contato) 
            strParticipante = participante.NomeParticipante + ' - ' + participante.Contato;
        else
            strParticipante = participante.NomeParticipante + ' (sem contato)';
        return strParticipante;
    }
}