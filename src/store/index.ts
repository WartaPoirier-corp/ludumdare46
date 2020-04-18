import { createStore } from 'redux';

const INITIAL_GAUGE_VALUE = 0.5;

const initialState = {
    host: {},
    page: 'menu',
    gauges: ['mood', 'energy', 'hunder', 'peepoo'].map(name => {
        return {
            value: INITIAL_GAUGE_VALUE,
            name,
        };
    }),
    skills: [],
    musicOn: true,
    soundOn: true,
};

export type State = typeof initialState;

export default createStore(
    (state = initialState, _) => state, // Initialization reducer
);
