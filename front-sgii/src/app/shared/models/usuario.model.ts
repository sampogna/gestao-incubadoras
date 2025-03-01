import { NucleoIncubador } from "./nucleo-incubador.model"

export class Usuario {
    Id: number 
    Nome: string 
    Sobrenome: string 
    Email: string 
    Senha: string 
    IdNucleoIncubador: number 
    IdTipo: TipoUsuario; 
    IdCargo?: number;

    Tipo?: string;

    NucleoIncubador?: NucleoIncubador;
    StrNucleoIncubador?: string;
}

export enum TipoUsuario {
    Colaborador = 1,
    Coordenador,
    Incubado,
    Associado
}

export const TipoStringMapper = {
    [TipoUsuario.Colaborador]: 'Colaborador',
    [TipoUsuario.Coordenador]: 'Coordenador',
    [TipoUsuario.Incubado]: 'Incubado',
    [TipoUsuario.Associado]: 'Associado'
}