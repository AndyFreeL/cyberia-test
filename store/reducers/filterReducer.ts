import {FilterAction, FiltersActionTypes, FilterState} from "../../types/filter";

const initialState: FilterState={
    filters:[],
    loading:false,
}

export const filterReducer=(state=initialState, action:FilterAction):FilterState=>{
    switch (action.type) {
        case FiltersActionTypes.FETCH_FILTERS:
            return {...state, loading:true}
        case FiltersActionTypes.FETCH_FILTER_SUCCESS:
            return {...state, loading:false,filters:action.payload}
        default:
            return state
    }
}