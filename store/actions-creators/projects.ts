import {Dispatch} from "redux";
import {ProjectsAction, ProjectsActionTypes} from "../../types/projects";
import axios from "axios";

export const fetchProjects=()=>{
    return async (dispatch:Dispatch<ProjectsAction>) =>{
        try{
            dispatch({type:ProjectsActionTypes.FETCH_PROJECTS})
            const response = await axios.get('https://backend.cyberia.studio/api/v1/projects')
            dispatch({type:ProjectsActionTypes.FETCH_PROJECTS_SUCCESS, payload:response.data.items})
        }catch (e){
            dispatch({type:ProjectsActionTypes.FETCH_PROJECTS_ERROR, payload:'error'})
        }
    }
}