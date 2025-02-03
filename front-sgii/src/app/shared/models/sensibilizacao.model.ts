import { FileBase } from "./file.model";
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

    ParticipanteSensibilizacaos?: Participante[] = [];

    DataAcaoStr: string;

    ImagemSensibilizacaos: ImagemSensibilizacao[] = [];

    constructor() {
        this.ParticipanteSensibilizacaos = [];
        this.ImagemSensibilizacaos = [];
    }
  }

export enum TiposAcaoSensibilizacao {
    Palestra = 1,
    Evento
}

export class ImagemSensibilizacao extends FileBase {
    IdSensibilizacao?: number;
    Tipo: TiposImagemSensibilizacao;
}

export enum TiposImagemSensibilizacao {
    ListaParticipantes = 1,
    RegistroFotografico
}