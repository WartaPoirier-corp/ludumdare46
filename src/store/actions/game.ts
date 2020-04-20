export const SET_HOST = 'SET_HOST';
export function setHost(animal) {
    return { type: SET_HOST, animal };
}

export const HANDLE_EVENT = 'HANDLE_EVENT';
export function handleEvent(act, host) {
    return { type: HANDLE_EVENT, act, host };
}

export const CLEAR_OUTCOME = 'CLEAR_OUTCOME';
export function clearOutcome() {
    return { type: CLEAR_OUTCOME };
}
