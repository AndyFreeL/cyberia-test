// import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
// import {AnyAction, , createStore} from "redux";
import {reducer, RootState} from "./reducers";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {createStore,applyMiddleware, Store} from 'redux';
import {Context, createWrapper} from 'next-redux-wrapper';


// const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);
//
// export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
//
// export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: false});
