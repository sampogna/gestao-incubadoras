export class Pagination {
    Page: number = 1;
    PageSize: number = 10;

    TotalPages: number = 0;
    TotalCount: number = 0;
}

export class PaginatedResult<T> {
    TotalCount: number = 1;
    Page: number = 1;
    PageSize: number = 10;
    TotalPages: number = 1;
    Data: T[] = [];
}

export enum PaginationActions {
    NEXT_PAGE = 1,
    PREVIOUS_PAGE = -1
}