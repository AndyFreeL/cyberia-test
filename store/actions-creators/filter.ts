import {Dispatch} from "redux";
import {FilterAction, FiltersActionTypes} from "../../types/filter";
import axios from "axios";


export const fetchFilters=()=>{
    return async (dispatch:Dispatch<FilterAction>) =>{
        try {
            dispatch({type:FiltersActionTypes.FETCH_FILTERS})
            const response = await axios.get('https://backend.cyberia.studio/api/v1/project-categories')
            dispatch({type:FiltersActionTypes.FETCH_FILTER_SUCCESS, payload:response.data.items})
        }catch (e){
            dispatch({type:FiltersActionTypes.FETCH_FILTER_ERROR, payload:'error'})
        }
    }
}