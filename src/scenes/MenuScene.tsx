import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import { goTo } from '../store/actions/router';
import { toggleSound, toggleMusic } from '../store/actions/settings';
import { State } from '../store';

export default function MenuScene() {
    const { soundOn, musicOn, host } = useSelector((state: State) => {
        return {
            soundOn: state.soundOn,
            musicOn: state.musicOn,
            host: state.host,
        };
    });
    const dispatch = useDispatch();

    const newGame = React.useCallback(() => {
        dispatch(goTo('intro'));
    }, [dispatch]);
    const resume = React.useCallback(() => {
        dispatch(goTo('main-scene'));
    }, [dispatch]);
    const credits = React.useCallback(() => {
        dispatch(goTo('credits'));
    }, [dispatch]);
    const toggleMusicCb = React.useCallback(() => {
        dispatch(toggleMusic())
    }, [dispatch]);
    const toggleSoundCb = React.useCallback(() => {
        dispatch(toggleSound())
    }, [dispatch]);

    return (
        <main className="menu">
            <section>
                <Button onClick={newGame}>New game</Button>
                {host.animal ? <Button onClick={resume}>Resume game</Button> : null}
                <Button onClick={credits}>Credits</Button>
            </section>
            <footer>
                <IconButton
                    on={musicOn}
                    iconOn='/icons/music-on.png'
                    iconOff='/icons/music-off.png'
                    altOn='Music is on.'
                    altOff='Music is off'
                    onToggle={toggleMusicCb}/>
                 <IconButton
                    on={soundOn}
                    iconOn='/icons/sound-on.png'
                    iconOff='/icons/sound-off.png'
                    altOn='Sound is on.'
                    altOff='Sound is off'
                    onToggle={toggleSoundCb}/>
            </footer>
        </main>
    );
}
