import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bcEditSensibilizacao } from 'src/app/shared/breadcrumb-items';

@Component({
    selector: 'edit-sensibilizacao',
    templateUrl: 'edit-sensibilizacao.component.html',
    styleUrls: ['edit-sensibilizacao.component.scss']
})

export class EditSensibilizacaoComponent implements OnInit {

    pageTitle: string;
    breadcrumbItems = bcEditSensibilizacao;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        
        this.pageTitle = (id) ? 'Edição de ação de sensibilização' : 'Criação de ação de sensibilização';
     }
}