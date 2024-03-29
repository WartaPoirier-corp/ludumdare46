import { SET_HOST, HANDLE_EVENT, CLEAR_OUTCOME } from '../actions/game';
import { SKILL_POINTS_INCREMENT } from '../actions/skills';
import { Host } from './';
import { Event } from '../../schema';
import allEvents from '../../data/events.json';

export interface Gauge {
    name: string;
    value: number;
}

export function hostReducer(state: Host = {}, action) {
    switch (action.type) {
        case SET_HOST: return { animal: action.animal };
        default: return state;
    }
}

const GAUGES = [ 'mood', 'energy', 'health', 'hunger', 'peepoo', 'libido', 'suspicion' ];
const INITIAL_GAUGE_VALUE = {
    otter: 0.9,
    cat: 0.8,
    dog: 0.66,
    triceratops: -1,
};

export function gaugesReducer(gauges: Gauge[] = [], action) {
    switch (action.type) {
        case SET_HOST:
            return GAUGES.map(g => {
                return {
                    name: g,
                    value: INITIAL_GAUGE_VALUE[action.animal]
                };
            });
        case HANDLE_EVENT:
            return gauges.map(g => {
                if (action.act != null && action.act.outcomes != null && action.act.outcomes[g.name] != null) {
                    g.value += action.act.outcomes[g.name];
                    if (g.value > 1) {
                        g.value = 1;
                    }
                }
                return g;
            });
        default: return gauges;
    }
}

export function eventReducer(state: Event = { hints: [], actions: [], description: '', animals: [] }, action) {
    switch (action.type) {
        case HANDLE_EVENT:
            return shuffle(allEvents).find(x =>
                x.animals.includes(action.host) &&
                    (!x.require || x.require.every(r => action.skills.includes(r))))
                || null;
        default: return state;
    }
}

// I stole that on stackoverflow
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

export function lastOutcomeReducer(lo = null, action) {
    switch (action.type) {
        case HANDLE_EVENT:
            return action.act.endMsg || null;
        case CLEAR_OUTCOME:
            return null;
        default: return lo;
    }
}

export function totalScoreReducer(score = 0, action) {
    switch (action.type) {
        case SET_HOST: return 0;
        case SKILL_POINTS_INCREMENT: return score + 1;
        default: return score;
    }
}
