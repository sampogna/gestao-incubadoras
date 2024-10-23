import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bcListSensibilizacao } from 'src/app/shared/breadcrumb-items';

@Component({
    selector: 'list-sensibilizacao',
    templateUrl: 'list-sensibilizacao.component.html',
    styleUrls: ['list-sensibilizacao.component.scss']
})

export class ListSensibilizacaoComponent {

    users = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
      ];
    
      columns = ['id', 'name', 'age'];

    breadcrumbItems = bcListSensibilizacao;

    constructor(private router: Router) { }

    navigateToCreation(): void {
        this.router.navigateByUrl("/sensibilizacao/editar");
    }

    navigateToEdit(sensibilizacao: any) {
        this.router.navigateByUrl("/sensibilizacao/editar/" + sensibilizacao.id);
    }
}