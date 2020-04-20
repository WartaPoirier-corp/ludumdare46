import { combineReducers } from 'redux';
import { Event } from '../../schema';
import { hostReducer, handleReducer } from './game';
import routerReducer from './router';
import { musicReducer, soundReducer } from './settings';
import { pointsReducer, skillsReducer } from './skills';

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
    points: 0,
    skills: [],
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
    points: pointsReducer,
    skills: skillsReducer,
    musicOn: musicReducer,
    soundOn: soundReducer,
}));
