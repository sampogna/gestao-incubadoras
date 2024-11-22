import { NgModule } from '@angular/core';
import { ListProspeccaoReuniaoComponent } from './list-prospeccao-reuniao/list-prospeccao-reuniao.component';
import { EditProspeccaoReuniaoComponent } from './edit-prospeccao-reuniao/edit-prospeccao-reuniao.component';
import { CommonModule } from '@angular/common';
import { ProspeccaoReuniaoRoutingModule } from './prospeccao-reuniao.routing';


@NgModule({
    imports: [
        CommonModule,
        ProspeccaoReuniaoRoutingModule
    ],
    declarations: [
        ListProspeccaoReuniaoComponent,
        EditProspeccaoReuniaoComponent
    ],
})
export class ProspeccaoReuniaoModule { }
