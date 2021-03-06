import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Tentacles from '../components/Tentacles';
import { goTo } from '../store/actions/router';
import { toggleSound, toggleMusic } from '../store/actions/settings';
import { State } from '../store';
import { muteMusic } from '../audio';

export default function MenuScene() {
    const { soundOn, musicOn, host } = useSelector((state: State) => {
        return {
            soundOn: state.soundOn,
            musicOn: state.musicOn,
            host: state.host,
        };
    });
    const dispatch = useDispatch();
    React.useEffect(() => {
        muteMusic(!musicOn);
    }, [ musicOn ]);

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
    const howToPlay = React.useCallback(() => {
        dispatch(goTo('how-to-play'));
    }, [dispatch]);

    return (
        <>
        <Tentacles />
        <main className="menu">
            <header>
                <img src="/icons/title.png" alt="The Parasist logo"/>
            </header>
            <section>
                <Button onClick={newGame}>New game</Button>
                {host.animal ? <Button onClick={resume}>Resume game</Button> : null}
                <Button onClick={howToPlay}>How to play?</Button>
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
        </>
    );
}
