export const SET_HOST = 'SET_HOST';
export function setHost(animal) {
    return { type: SET_HOST, animal };
}

export const HANDLE_EVENT = 'HANDLE_EVENT';
export function handleEvent(actionId) {
    return { type: HANDLE_EVENT, actionId };
}