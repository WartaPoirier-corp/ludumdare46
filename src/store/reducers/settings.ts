import { TOGGLE_MUSIC, TOGGLE_SOUND } from '../actions/settings';

export function soundReducer(on = true, action) {
    switch (action.type) {
        case TOGGLE_SOUND: return !on;
        default: return on;
    }
}

export function musicReducer(on = true, action) {
    switch (action.type) {
        case TOGGLE_MUSIC: return !on;
        default: return on;
    }
}
