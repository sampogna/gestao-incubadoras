import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStripedComponent } from './table-striped.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CustomPaginatorModule } from '../custom-paginator/custom-paginator.module';


@NgModule({
  declarations: [TableStripedComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CustomPaginatorModule
  ],
  exports: [TableStripedComponent]
})
export class TableStripedModule { }
