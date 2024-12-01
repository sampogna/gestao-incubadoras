import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bcListProspeccaoReuniao } from 'src/app/shared/breadcrumb-items';

@Component({
  selector: 'app-list-prospeccao-reuniao',
  templateUrl: './list-prospeccao-reuniao.component.html',
  styleUrls: ['./list-prospeccao-reuniao.component.scss']
})
export class ListProspeccaoReuniaoComponent {
  users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
  ];

  columns = ['id', 'name', 'age'];

  breadcrumbItems = bcListProspeccaoReuniao;

  constructor(private router: Router) { }

  navigateToCreation(): void {
      this.router.navigateByUrl("prospeccao/reuniao/editar");
  }

  navigateToEdit(reuniao: any) {
    this.router.navigateByUrl("prospeccao/reuniao/editar/" + reuniao.id);
  }
}
