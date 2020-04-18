import { createStore } from 'redux';

const INITIAL_GAUGE_VALUE = 0.5;

const initialState = {
    host: null,
    page: 'intro',
    gauges: Array.from(['mood', 'energy', 'hunder', 'peepoo'], (name, _) => {
        return {
            value: INITIAL_GAUGE_VALUE,
            name,
        };
    }),
    skills: [],
};

export type State = typeof initialState;

export default createStore(
    (state = initialState, _) => state, // Initialization reducer
);
