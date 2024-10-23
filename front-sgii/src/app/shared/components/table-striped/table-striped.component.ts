import { AfterViewInit, Component, Input, ViewChild, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss']
})
export class TableStripedComponent<T> implements AfterViewInit, OnChanges {
  @Input() tableItems: T[] = [];
  @Input() displayedColumns: string[];
  @Input() actionTemplate: TemplateRef<any>; // Input to accept action template
  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableItems']) {
      this.updateDataSource();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private updateDataSource() {
    this.dataSource.data = this.tableItems;
  }
}