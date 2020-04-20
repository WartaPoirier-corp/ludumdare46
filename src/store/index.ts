import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { State as InnerState, reducers, initialState } from './reducers'

export type State = InnerState;

export default createStore(
    reducers, // Initialization reducer
    initialState,
    // @ts-ignore
    compose(persistState())
);
