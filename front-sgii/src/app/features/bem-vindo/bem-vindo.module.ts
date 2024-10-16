import { NgModule } from '@angular/core';
import { BemVindoComponent } from './bem-vindo.component';
import { BemVindoRoutingModule } from './bem-vindo.routing';

@NgModule({
    imports: [BemVindoRoutingModule],
    exports: [BemVindoComponent],
    declarations: [BemVindoComponent],
    providers: [],
})
export class BemVindoModule { }
