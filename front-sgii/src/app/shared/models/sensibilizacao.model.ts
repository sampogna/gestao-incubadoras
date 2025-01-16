import { Participante } from "./participante.model";
import { StatusAprovacaoBasico } from "./status-aprovacao.model";

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
    Status: StatusAprovacaoBasico;

    Participantes?: Participante[] = [];

    constructor() {
        this.Participantes = [];
    }
  }

export enum TiposAcaoSensibilizacao {
    Palestra = 1,
    Evento
}