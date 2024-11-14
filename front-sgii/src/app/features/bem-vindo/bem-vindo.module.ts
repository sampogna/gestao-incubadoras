import { NgModule } from '@angular/core';
import { BemVindoComponent } from './bem-vindo.component';
import { BemVindoRoutingModule } from './bem-vindo.routing';
import { SimpleInputModule } from 'src/app/shared/components/simple-input/simple-input.module';

@NgModule({
    imports: [BemVindoRoutingModule, SimpleInputModule],
    exports: [BemVindoComponent],
    declarations: [BemVindoComponent],
    providers: [],
})
export class BemVindoModule { }
