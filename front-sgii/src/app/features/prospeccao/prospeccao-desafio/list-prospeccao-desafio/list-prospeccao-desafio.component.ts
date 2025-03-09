import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bcListProspeccaoDesafio } from 'src/app/shared/breadcrumb-items';
import { ColumnDataType, ITableColumnDisplay } from 'src/app/shared/components/table-striped/table-striped.component';

@Component({
  selector: 'app-list-prospeccao-desafio',
  templateUrl: './list-prospeccao-desafio.component.html',
  styleUrls: ['./list-prospeccao-desafio.component.scss']
})
export class ListProspeccaoDesafioComponent {
  
  users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
  ];

  columns: ITableColumnDisplay[] = [
    { name: 'Id', labelInDb: 'id', type: ColumnDataType.Text },
    { name: 'Nome', labelInDb: 'name', type: ColumnDataType.Text },
  ];

  breadcrumbItems = bcListProspeccaoDesafio;

  constructor(private router: Router) { }

  navigateToCreation(): void {
      this.router.navigateByUrl("prospeccao/desafio/editar");
  }

  navigateToEdit(desafio: any) {
      this.router.navigateByUrl("prospeccao/desafio/editar/" + desafio.id);
  }
}
