import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import { goTo } from '../store/actions/router';

export default function MenuScene() {
    const store = useStore();
    const state = store.getState();
    const dispatch = useDispatch();

    const newGame = React.useCallback(() => {
        dispatch(goTo('intro'));
    });
    const resume = React.useCallback(() => {
        dispatch(goTo('main-scene'));
    });
    const credits = React.useCallback(() => {
        dispatch(goTo('credits'));
    });

    return (
        <main className="menu">
            <section>
                <Button onClick={newGame}>New game</Button>
                {state.host.animal ? <Button onClick={resume}>Resume game</Button> : null}
                <Button onClick={credits}>Credits</Button>
            </section>
            <footer>
                <IconButton
                    on={state.musicOn}
                    iconOn='/icons/music-on.png'
                    iconOff='/icons/music-off.png'
                    altOn='Music is on.'
                    altOff='Music is off'/>
                 <IconButton
                    on={state.soundOn}
                    iconOn='/icons/sound-on.png'
                    iconOff='/icons/sound-off.png'
                    altOn='Sound is on.'
                    altOff='Sound is off'/>
            </footer>
        </main>
    );
}
