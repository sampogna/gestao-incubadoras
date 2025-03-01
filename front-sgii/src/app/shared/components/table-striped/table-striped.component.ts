import { AfterViewInit, Component, Input, ViewChild, OnChanges, SimpleChanges, TemplateRef, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Pagination, PaginationActions } from '../../models/pagination.model';

@Component({
  selector: 'table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss']
})
export class TableStripedComponent<T> implements OnChanges {
  @Input() tableItems: T[] = [];
  @Input() displayedColumns: ITableColumnDisplay[];
  @Input() actionTemplate: TemplateRef<any>; // Input to accept action template
  @Input() pagination: Pagination = new Pagination();
  dataSource = new MatTableDataSource<T>();
  columnDataTypes = ColumnDataType;
  get columnStringArray(): string[] {
    return this.displayedColumns?.map(column => column.labelInDb);
  }

  @Output() paginationChanged = new EventEmitter<PaginationActions>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableItems']) {
      this.updateDataSource();
    }
  }

  private updateDataSource() {
    this.dataSource = new MatTableDataSource<T>(this.tableItems);
  }
}

export interface ITableColumnDisplay {
  name: string;
  labelInDb: string;
  type: ColumnDataType;
}

export enum ColumnDataType {
  Text,
  Date,
  Currency //R$ - Project is for Brazilian currency, ATM
}