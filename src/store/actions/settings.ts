export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const TOGGLE_MUSIC = 'TOGGLE_MUSIC';

export function toggleSound() {
    return { type: TOGGLE_SOUND };
}

export function toggleMusic() {
    return { type: TOGGLE_MUSIC };
}
