import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bcEditNucleoIncubador } from 'src/app/shared/breadcrumb-items';
import { NucleoIncubador } from 'src/app/shared/models/nucleo-incubador.model';

@Component({
  selector: 'app-edit-nucleos-incubadores',
  templateUrl: './edit-nucleos-incubadores.component.html',
  styleUrls: ['./edit-nucleos-incubadores.component.scss']
})
export class EditNucleosIncubadoresComponent implements OnInit {

  pageTitle: string;

  breadcrumbItems = bcEditNucleoIncubador;

  nucleoIncubador: NucleoIncubador = new NucleoIncubador();

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
        
    this.pageTitle = (id) ? 'Edição de ação de sensibilização' : 'Criação de ação de sensibilização';
    this.nucleoIncubador.Id = id ?? null;
  }
}
