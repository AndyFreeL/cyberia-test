import {ProjectsAction, ProjectsActionTypes, ProjectsState} from "../../types/projects";

const initialState: ProjectsState={
    projects:[],
    loading:false,
    error:null
}

export const projectsReducer =(state=initialState, action:ProjectsAction):ProjectsState=>{
    switch (action.type){
        case ProjectsActionTypes.FETCH_PROJECTS:
            return {...state, loading:true}
        case ProjectsActionTypes.FETCH_PROJECTS_SUCCESS:
            return {...state, loading:false, projects:action.payload}
        default:
            return state
    }
}