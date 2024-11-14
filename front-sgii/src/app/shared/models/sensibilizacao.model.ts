export class Sensibilizacao {
    Id: number;
    IdNucleoIncubador: number | null = null;
    IdTipoSensibilizacao: TiposAcaoSensibilizacao;
    Tema: string;
    IdUsuarioResponsavel: number;
    DataAcao: Date;
    Local: string;
    Perfil: string;
    NumeroSensibilizados: number;
    Observacoes: string;
    DataRegistro: Date;
    IdUsuRegistrou: number;
    Status: StatusAprovacaoSensibilizacao;

    Participantes?: ParticipanteSensibilizacao[] = [];

    constructor() {
        this.Participantes = [];
    }
  }

export enum TiposAcaoSensibilizacao {
    Palestra,
    Evento
}

export enum StatusAprovacaoSensibilizacao {
    Aguardando,
    Aprovado,
    Reprovado
}

export interface ParticipanteSensibilizacao {
    Id?: number;
    Nome: string;
    IdSensibilizacao?: number;
}