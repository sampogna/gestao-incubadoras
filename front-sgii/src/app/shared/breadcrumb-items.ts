import { IBreadCrumbItem } from "./models/breadcrumb.model";

export const bcListSensibilizacao: IBreadCrumbItem[] = [
    { name: 'Listagem de ações de sensibilização', route: '' }
]

export const bcEditSensibilizacao: IBreadCrumbItem[] = [
    { name: 'Listagem de ações de sensibilização', route: '../' },
    { name: 'Edição', route: '' }
]

export const bcListNucleosIncubadores: IBreadCrumbItem[] = [
    { name: 'Listagem de núcleos incubadores', route: '' }
]

export const bcEditNucleoIncubador: IBreadCrumbItem[] = [
    { name: 'Listagem de núcleos incubadores', route: '../' },
    { name: 'Edição', route: '' }
]

export const bcListProspeccaoDesafio: IBreadCrumbItem[] = [
    { name: 'Listagem de desafios de prospecção', route: '../' },
    { name: 'Edição', route: '' }
]

export const bcEditProspeccaoReuniao: IBreadCrumbItem[] = [
    { name: 'Listagem de reuniões de prospecção', route: '../' },
    { name: 'Edição', route: '' }
]