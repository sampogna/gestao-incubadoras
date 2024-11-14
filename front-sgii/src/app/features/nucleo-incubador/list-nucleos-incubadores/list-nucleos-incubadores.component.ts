import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bcListNucleosIncubadores } from 'src/app/shared/breadcrumb-items';

@Component({
  selector: 'app-list-nucleos-incubadores',
  templateUrl: './list-nucleos-incubadores.component.html',
  styleUrls: ['./list-nucleos-incubadores.component.scss']
})
export class ListNucleosIncubadoresComponent {

  users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
  ];

  columns = ['id', 'name', 'age'];

  breadcrumbItems = bcListNucleosIncubadores;

  constructor(private router: Router) { }

  navigateToCreation(): void {
      this.router.navigateByUrl("/nucleo-incubador/editar");
  }

  navigateToEdit(nucleo: any): void {
      this.router.navigateByUrl("/nucleo-incubador/editar/" + nucleo.id);
  }

  deleteElement(nucleo: any): void {
    //doSomething
  }
}
