import { NgModule } from '@angular/core';

import { CustomPaginatorComponent } from './custom-paginator.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [CustomPaginatorComponent],
    declarations: [CustomPaginatorComponent],
    providers: [],
})
export class CustomPaginatorModule { }
