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
  @Input() displayedColumns: string[];
  @Input() actionTemplate: TemplateRef<any>; // Input to accept action template
  @Input() pagination: Pagination = new Pagination();
  dataSource = new MatTableDataSource<T>();

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