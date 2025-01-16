import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination, PaginationActions } from '../../models/pagination.model';

@Component({
    selector: 'custom-paginator',
    templateUrl: 'custom-paginator.component.html',
    styleUrls: ['./custom-paginator.component.scss']
})

export class CustomPaginatorComponent {
    @Input() paginationData = new Pagination();

    @Output() paginationAction = new EventEmitter<PaginationActions>();

    paginationActions = PaginationActions;

    proceedToPaginate(move: PaginationActions): void {
        const currentPage = this.paginationData.Page;
        if (
            (
                currentPage < this.paginationData.TotalPages
                && move == PaginationActions.NEXT_PAGE
            )
            ||
            (
                currentPage > 1
                && move == PaginationActions.PREVIOUS_PAGE
            )
        )
        this.paginationAction.emit(move);
    }
}

