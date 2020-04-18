import { createStore } from 'redux';
import { reducers, initialState } from './reducers'

export default createStore(
    reducers, // Initialization reducer
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
