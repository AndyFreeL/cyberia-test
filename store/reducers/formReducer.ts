import {FormAction, FormActionTypes, FormState} from "../../types/form";

const initialState: FormState={
    formErrors:null,
    loading:false,
    feedback:false
}

export const formReducer=(state=initialState, action:FormAction):FormState=>{
    switch (action.type) {
        case FormActionTypes.FETCH_FORM:
            return {...state, loading:true}
        case FormActionTypes.FETCH_FORM_SUCCESS:
            return {...state, loading:false,formErrors:action.payload, feedback:true}
        default:
            return state
    }
}