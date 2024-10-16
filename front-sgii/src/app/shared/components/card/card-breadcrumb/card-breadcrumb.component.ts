import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadCrumbItem } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'card-breadcrumb',
  templateUrl: './card-breadcrumb.component.html',
  styleUrls: ['./card-breadcrumb.component.scss']
})
export class CardBreadcrumbComponent {
  @Input() breadcrumbItems: IBreadCrumbItem[];

  constructor(private router: Router) {}

  navigateToRoute(absoluteRoute: string): void {
    this.router.navigateByUrl(absoluteRoute);
  }
}
