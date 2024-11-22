import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProspeccaoDesafioComponent } from './list-prospeccao-desafio/list-prospeccao-desafio.component';
import { EditProspeccaoDesafioComponent } from './edit-prospeccao-desafio/edit-prospeccao-desafio.component';
import { ProspeccaoDesafioRoutingModule } from './prospeccao-desafio.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ProspeccaoDesafioRoutingModule,
        SharedModule,
        
    ],
    declarations: [
        ListProspeccaoDesafioComponent,
        EditProspeccaoDesafioComponent
    ]
})
export class ProspeccaoDesafioModule { }
