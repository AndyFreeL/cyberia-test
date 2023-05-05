import {Dispatch} from "redux";
import {FormAction, FormActionTypes} from "../../types/form";
import axios from "axios";


export const fetchForm=(fd)=>{
    return async (dispatch:Dispatch<FormAction>) =>{
        try {
            dispatch({type:FormActionTypes.FETCH_FORM})
            const response = await axios.post('https://backend.cyberia.studio/api/v1/feedbacks', fd)
            dispatch({type:FormActionTypes.FETCH_FORM_SUCCESS, payload:response.data.errors})
            console.log(response.data.errors)
        }catch (e){
            dispatch({type:FormActionTypes.FETCH_FORM_ERROR, payload:'error'})
        }
    }
}