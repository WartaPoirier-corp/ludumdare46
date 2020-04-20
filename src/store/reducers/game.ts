import { SET_HOST, HANDLE_EVENT } from '../actions/game';
import { Host, State } from './';
import { Event } from '../../schema';
import allEvents from '../../data/events';

export function hostReducer(state: Host = {}, action) {
    switch (action.type) {
        case SET_HOST: return { animal: action.animal };
        default: return state;
    }
}

export function gaugesReducer(gauges: Gauge[] = [], action) {
    console.log(gauges, action);
    switch (action.type) {
        case HANDLE_EVENT:
            return gauges.map(g => {
                const act = res.event.actions[action.actionId];
                if (act != null && act.outcomes[g.name] != null) {
                    g.value += act.outcomes[g.name];
                }
                return g;
            });
        default: return gauges;
    }
}

export function eventReducer(state: Event = {}, action) {
    switch (action.type) {
        case HANDLE_EVENT:
            return shuffle(allEvents)[0];
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
