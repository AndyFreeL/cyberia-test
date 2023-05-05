export interface FilterState{
    filters:any[];
    loading:boolean;
}

export enum FiltersActionTypes{
    FETCH_FILTERS = 'FETCH_FILTERS',
    FETCH_FILTER_SUCCESS='FETCH_FILTER_SUCCESS',
    FETCH_FILTER_ERROR='FETCH_FILTER_ERROR'
}

interface FetchFiltersAction{
    type:FiltersActionTypes.FETCH_FILTERS
}
interface FetchFilterSuccessAction {
    type: FiltersActionTypes.FETCH_FILTER_SUCCESS;
    payload: any;
}
interface FetchFilterErrorAction {
    type: FiltersActionTypes.FETCH_FILTER_ERROR;
    payload: string;
}

export type FilterAction = FetchFiltersAction | FetchFilterSuccessAction  | FetchFilterErrorAction