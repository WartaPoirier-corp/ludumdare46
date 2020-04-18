import { createStore } from 'redux';

const initialState = {
    message: 'Hello world from Redux',
};

export type State = typeof initialState;

export default createStore(
    (state = initialState, _) => state, // Initialization reducer
);
