import { INucleoIncubador } from "./nucleo-incubador.model";

export interface ISensibilizacao {
    Id: number;
    IdNucleoIncubador: number;
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