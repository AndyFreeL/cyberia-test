export interface FormState{
    formErrors:any;
    loading:boolean;
    feedback:boolean;
}

export enum FormActionTypes{
    FETCH_FORM = 'FETCH_FORM',
    FETCH_FORM_SUCCESS='FETCH_FORM_SUCCESS',
    FETCH_FORM_ERROR='FETCH_FORM_ERROR'
}

interface FetchFormAction{
    type:FormActionTypes.FETCH_FORM;
}
interface FetchFormSuccessAction {
    type: FormActionTypes.FETCH_FORM_SUCCESS;
    payload: any;
}
interface FetchFormErrorAction {
    type: FormActionTypes.FETCH_FORM_ERROR;
    payload: string;
}

export type FormAction = FetchFormAction | FetchFormSuccessAction  | FetchFormErrorAction