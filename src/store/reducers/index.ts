import { combineReducers } from 'redux';
import routerReducer from './router';
import { soundReducer, musicReducer } from './settings';
import { hostReducer } from './game';

const INITIAL_GAUGE_VALUE = 0.5;

// everything is nullable because the initial value (when no host is selected)
// is {}
export interface Host {
    animal?: string;
}

export const initialState = {
    host: {} as Host,
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

const id = (name) => (x = initialState[name], _) => x;

export const reducers = combineReducers({
    page: routerReducer,
    host: hostReducer,
    gauges: id('gauges'),
    skills: id('skills'),
    musicOn: musicReducer,
    soundOn: soundReducer,
});
