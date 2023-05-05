export interface ProjectsState{
    projects:any[];
    loading: boolean;
    error: null | string;
}

export enum ProjectsActionTypes{
    FETCH_PROJECTS = 'FETCH_PROJECTS',
    FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
    FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR'
}

interface FetchProjectsAction{
    type:ProjectsActionTypes.FETCH_PROJECTS
}
interface FetchProjectsSuccessAction {
    type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS;
    payload: any;
}
interface FetchProjectsErrorAction {
    type: ProjectsActionTypes.FETCH_PROJECTS_ERROR;
    payload: string;
}

export type ProjectsAction = FetchProjectsAction | FetchProjectsSuccessAction | FetchProjectsErrorAction