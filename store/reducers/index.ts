import {combineReducers} from "redux";
import {filterReducer} from "./filterReducer";
import {projectsReducer} from "./projectsReducer";
import {formReducer} from "./formReducer";
// import {HYDRATE} from "next-redux-wrapper";


const rootReducer = combineReducers({
    filters: filterReducer,
    projects: projectsReducer,
    form:formReducer
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}



import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

export interface State {
    tick: string;
}

// create your reducer
// export const reducer = (state: State = {tick: 'init'}, action: AnyAction) => {
//     switch (action.type) {
//         case HYDRATE:
//             // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//             return {...state, ...action.payload};
//         case 'TICK':
//             return {...state, tick: action.payload};
//         default:
//             return state;
//     }
// };

export type RootState = ReturnType<typeof rootReducer>

