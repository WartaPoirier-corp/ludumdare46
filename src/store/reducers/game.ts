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

export function handleReducer(next) {
    return (state: State, action) => {
        switch (action.type) {
            case HANDLE_EVENT:
                const res = next(state, action);
                res.gauges = res.gauges.map(g => {
                    const act = res.event.actions[action.actionId];
                    if (act != null && act.outcomes[g.name] != null) {
                        g.value += act.outcomes[g.name];
                    }
                    return g;
                });
                if (res.gauges.some(x => x.value < 0)) {
                    res.page = 'game-over';
                }
                res.event = nextEvent(res);
                return { ...res };
            default:
                return next(state, action);
        }
    }
}

function nextEvent(state: State) {
    return shuffle(allEvents)[0];
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
