import store from './store';

let music = new Audio('/audio/gnuh.mp3');
let musicStarted = false;
export function muteMusic(muted) {
    if (!muted && !musicStarted) {
        play(music, false);
        musicStarted = true;
    }
    music.muted = muted;
}

export function play(aud, isSound = true) {
    if ((typeof aud) === 'string') {
        aud = new Audio(aud);
    }
    if (aud.readyState === 4) { // ready
        aud.play();
    }
    aud.addEventListener('canplaythrough', () => {
        const state = store.getState();
        if ((isSound && state.soundOn) || state.musicOn) {
            aud.play();    
        }
    });
}


