import { combineReducers } from 'redux';
import { Event } from '../../schema';
import { hostReducer, eventReducer, gaugesReducer, lastOutcomeReducer, totalScoreReducer, Gauge } from './game';
import routerReducer from './router';
import { musicReducer, soundReducer } from './settings';
import { pointsReducer, skillsReducer } from './skills';

// everything is nullable because the initial value (when no host is selected)
// is {}
export interface Host {
    animal?: string;
}

export const initialState = {
    host: {} as Host,
    page: 'menu',
    gauges: [] as Gauge[],
    points: 0,
    totalScore: 0,
    skills: [ 'vision-1', 'sound-1', 'feelings-1', 'needs-1', 'smell-1' ],
    musicOn: false,
    soundOn: false,
    event: { actions: [], hints:[], description: '', } as Event,
    lastOutcome: null,
};
export type State = typeof initialState;

export const reducers = combineReducers({
    page: routerReducer,
    host: hostReducer,
    gauges: gaugesReducer,
    event: eventReducer,
    points: pointsReducer,
    skills: skillsReducer,
    musicOn: musicReducer,
    soundOn: soundReducer,
    lastOutcome: lastOutcomeReducer,
    totalScore: totalScoreReducer,
});
