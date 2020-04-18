import { combineReducers } from 'redux';
import routerReducers from './router';
import { soundReducer, musicReducer } from './settings';

const INITIAL_GAUGE_VALUE = 0.5;

export const initialState = {
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

const id = (name) => (x = initialState[name], _) => x;

export const reducers = combineReducers({
    page: routerReducers,
    host: id('host'),
    gauges: id('gauges'),
    skills: id('skills'),
    musicOn: musicReducer,
    soundOn: soundReducer,
});

