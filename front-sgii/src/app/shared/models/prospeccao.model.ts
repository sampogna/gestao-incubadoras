import { FileBase } from "./file.model";
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

    // Status: StatusAprovacaoBasico;

    DataInicioStr: string;
    DataFinalStr: string;

    ParticipanteDesafioInovacaos?: Participante[] = [];
    IdeiaDesafioInovacaos?: IdeiaDesafioInovacao[]= [];
    ImagemDesafioInovacaos: ImagemDesafioInovacao[] = [];

    constructor() {
        this.ParticipanteDesafioInovacaos = [];
        this.IdeiaDesafioInovacaos = [];
        this.ImagemDesafioInovacaos = [];
    }
}

export class ParticipanteDesafioInovacao {
    Id?: number;
    IdDesafioInovacao?: number;
    Nome?: string;
}

export class ImagemDesafioInovacao extends FileBase {
    IdDesafioInovacao?: number;
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
    IdTipoAcaoProspeccao: TiposAcaoReuniao;
    TemaAcao: string;
    DataAcao: Date;
    Local: string;
    Perfil: string;
    Descricao: string;
    IdEstagioMaturidade: EstagiosMaturidade;
    Observacoes: string;
    IdResponsavel: number;
    IdUsuRegistrou: number;
    DataRegistro?: Date;

    DataAcaoStr: string;

    // Status: StatusAprovacaoBasico;

    ParticipanteReuniaoProspeccaos?: ParticipanteReuniaoProspeccao[] = [];
    ImagemReuniaoProspeccaos: ImagemReuniaoProspeccao[] = [];

    constructor() {
        this.ParticipanteReuniaoProspeccaos = [];
        this.ImagemReuniaoProspeccaos = [];
    }
}

///////////////////// Reuniao

export class ImagemReuniaoProspeccao extends FileBase {
    IdReuniaoProspeccao?: number;
}

export enum TiposAcaoReuniao {
    ReuniaoGrupoPesquisa = 1,
    ReuniaoOrganizacoes,
    AtendimentoEmpreendedor,
    AtendimentoInventorIndependente,
    MapeamentoTCC
}

export const TiposReuniaoSelectItems = [
    { id: TiposAcaoReuniao.ReuniaoGrupoPesquisa, name: 'Reunião com Grupo de Pesquisa ou Extensão' },
    { id: TiposAcaoReuniao.AtendimentoInventorIndependente, name: 'Reunião com Organizações' },
    { id: TiposAcaoReuniao.AtendimentoEmpreendedor, name: 'Atendimento à Empreendedor' },
    { id: TiposAcaoReuniao.AtendimentoInventorIndependente, name: 'Atendimento à Inventor Independente' },
    { id: TiposAcaoReuniao.MapeamentoTCC, name: 'Mapeamento de TCC' }
]

export enum EstagiosMaturidade {
    CriacaoIdeacao = 1,
    EvolucaoOperacao,
    MaturacaoTracao,
    AutossustentacaoScaleUp
}

export const EstagiosMaturidadeSelectItems = [
    { id: EstagiosMaturidade.CriacaoIdeacao, name: 'Criação de Ideia' },
    { id: EstagiosMaturidade.EvolucaoOperacao, name: 'Evolução de Operação' },
    { id: EstagiosMaturidade.MaturacaoTracao, name: 'Maturação de Tração' },
    { id: EstagiosMaturidade.AutossustentacaoScaleUp, name: 'Autossustentação Scale Up' }
]

export class ParticipanteReuniaoProspeccao {
    Id?: number;
    IdReuniaoProspeccao?: number;
    Contato?: string;
    NomeParticipante?: string;
}