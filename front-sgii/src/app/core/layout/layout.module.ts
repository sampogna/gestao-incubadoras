import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/shared/buttons/button.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        RouterModule,
        ButtonModule,
        MatMenuModule,
        MatButtonModule
    ],
    exports: [NavbarComponent, LayoutComponent],
    declarations: [LayoutComponent, NavbarComponent],
    providers: [],
})
export class LayoutModule { }
