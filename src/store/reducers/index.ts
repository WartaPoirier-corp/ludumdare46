import { combineReducers } from 'redux';
import routerReducer from './router';
import { soundReducer, musicReducer } from './settings';
import { hostReducer, handleReducer } from './game';
import { Event } from '../../schema';

const INITIAL_GAUGE_VALUE = 0.5;

// everything is nullable because the initial value (when no host is selected)
// is {}
export interface Host {
    animal?: string;
}

export const initialState = {
    host: {} as Host,
    page: 'menu',
    gauges: ['mood', 'energy', 'hunger', 'peepoo'].map(name => {
        return {
            value: INITIAL_GAUGE_VALUE,
            name,
        };
    }),
    skills: ['mood', 'energy', 'hunger', 'peepoo', 'vision-1', 'smell-1'],
    musicOn: false,
    soundOn: false,
    event: { actions: [], hints:[], description: '', } as Event,
};
export type State = typeof initialState;

const id = (name) => (x = initialState[name], _) => x;

export const reducers = handleReducer(combineReducers({
    page: routerReducer,
    host: hostReducer,
    gauges: id('gauges'),
    event: id('event'),
    skills: id('skills'),
    musicOn: musicReducer,
    soundOn: soundReducer,
}));
