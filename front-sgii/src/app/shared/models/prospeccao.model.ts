import { Participante } from "./participante.model";
import { StatusAprovacaoBasico } from "./status-aprovacao.model";

export class DesafioInovacao {
    Id: number;
    Email: string;
    IdNucleoIncubador: number;
    Titulo: string;
    IdResponsavel: number;
    DataInicio: Date;
    DataFinal: Date;
    Local: string;
    Perfil: string;
    NumeroOportunidades: number;
    Observacoes: string;
    Status: StatusAprovacaoBasico;

    Participantes?: Participante[] = [];
    Ideias?: IdeiaDesafioInovacao[]= []

    constructor() {
        this.Participantes = [];
        this.Ideias = [];
    }
}

export class IdeiaDesafioInovacao {
    Id?: number;
    IdDesafioInovacao?: number;
    Ideia: string;
}

export class ReuniaoProspeccao {
    Id: number;
    Email: string;
    IdNucleoIncubador: number;
    IdTipoAcaoProspeccao: number;
    TemaAcao: string;
    DataAcao: Date;
    Local: string;
    Perfil: string;
    Descricao: string;
    IdEstagioMaturidade: number;
    Observacoes: string;
    IdResponsavel: number;
    IdUsuRegistrou: number;
    DataRegistro: Date;

    Status: StatusAprovacaoBasico;

    Participantes?: Participante[] = [];

    constructor() {
        this.Participantes = [];
    }
}