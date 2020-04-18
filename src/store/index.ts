import { createStore } from 'redux';
import { State as InnerState, reducers, initialState } from './reducers'

export type State = InnerState;

export default createStore(
    reducers, // Initialization reducer
    initialState,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
