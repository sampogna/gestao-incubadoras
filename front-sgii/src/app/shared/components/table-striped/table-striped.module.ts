import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStripedComponent } from './table-striped.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TableStripedComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  exports: [TableStripedComponent]
})
export class TableStripedModule { }
