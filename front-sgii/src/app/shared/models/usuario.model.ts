export class Usuario {
    Id: number 
    Nome: string 
    Sobrenome: string 
    Email: string 
    Senha: string 
    IdNucleoIncubador: number 
    IdTipo: TipoUsuario; 
    IdCargo?: number;
}

export enum TipoUsuario {
    Comum = 1,
    SuperUsuario
}