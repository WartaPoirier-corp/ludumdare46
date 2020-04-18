import React from 'react';
import { useStore } from 'react-redux';
import Button from '../components/Button'
import IconButton from '../components/IconButton'

export default function MenuScene() {
    const store = useStore();
    const state = store.getState();
    return (
        <main className="menu">
            <section>
                <Button>New game</Button>
                {state.host !== null ? <Button>Resume game</Button> : null }
                <Button>Credits</Button>
            </section>
            <footer>
                <IconButton
                    on={state.musicOn}
                    iconOn='/assets/icons/music-on.png'
                    iconOff='/assets/icons/music-off.png'
                    altOn='Music is on.'
                    altOff='Music is off'/>
                 <IconButton
                    on={state.soundOn}
                    iconOn='/assets/icons/sound-on.png'
                    iconOff='/assets/icons/sound-off.png'
                    altOn='Sound is on.'
                    altOff='Sound is off'/>
            </footer>
        </main>
    );
}
