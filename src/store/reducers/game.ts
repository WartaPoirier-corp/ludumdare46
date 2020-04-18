import { SET_HOST } from '../actions/game';
import { Host } from './';

export function hostReducer(state: Host = {}, action) {
    switch (action.type) {
        case SET_HOST: return { animal: action.animal };
        default: return state;
    }
}
