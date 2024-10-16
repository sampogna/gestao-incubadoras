import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bcListSensibilizacao } from 'src/app/shared/breadcrumb-items';

@Component({
    selector: 'list-sensibilizacao',
    templateUrl: 'list-sensibilizacao.component.html',
    styleUrls: ['list-sensibilizacao.component.scss']
})

export class ListSensibilizacaoComponent implements OnInit {

    breadcrumbItems = bcListSensibilizacao;

    constructor(private router: Router) { }

    ngOnInit() { }

    navigateToCreation(): void {
        this.router.navigateByUrl("/sensibilizacao/editar")
    }
}