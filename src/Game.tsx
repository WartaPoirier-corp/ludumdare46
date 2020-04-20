import React from 'react';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import Credits from './scenes/CreditsScene';
import GameOverScene from './scenes/GameOverScene';
import HostSelection from './scenes/HostSelectionScene';
import HowToPlay from './scenes/HowToPlayScene';
import Intro from './scenes/IntroScene';
import MainScene from './scenes/MainScene';
import Menu from './scenes/MenuScene';
import { default as store, State } from './store';

const imgs = [
    'animals/parasite.png',
    'animals/para-otter.png',
    'animals/para-cat.png',
    'animals/dog.png',
    'animals/para-dog.png',
    'animals/triceratops.png',
    'animals/cat.png',
    'animals/otter.png',
    'game_over.png',
    'icons/tentacle1.png',
    'icons/gauges/libido.png',
    'icons/gauges/hunger.png',
    'icons/gauges/health.png',
    'icons/gauges/mood.png',
    'icons/gauges/energy.png',
    'icons/gauges/peepoo.png',
    'icons/gauges/suspicion.png',
    'icons/music-off.png',
    'icons/favicon.png',
    'icons/music-on.png',
    'icons/tentacle2.png',
    'icons/sound-off.png',
    'icons/menu.png',
    'icons/tentacle3.png',
    'icons/tentacle4.png',
    'icons/sound-on.png',
    'icons/title.png',
    'skills/feelings-1.png',
    'skills/root.png',
    'skills/vision-3.png',
    'skills/feelings-2.png',
    'skills/smell-2.png',
    'skills/sound-1.png',
    'skills/vision-2.png',
    'skills/needs-1.png',
    'skills/sound-2.png',
    'skills/needs-2.png',
    'skills/needs-3.png',
    'skills/smell-3.png',
    'skills/smell-1.png',
    'skills/feelings-3.png',
    'skills/vision-1.png',
    'skills/sound-3.png',
];
const sounds = [
    '/audio/gnuh.mp3',
    '/audio/click.mp3',
    '/audio/cat.mp3',
    '/audio/dog.mp3',
    '/audio/otter.mp3',
    '/audio/triceratops.mp3',
];

export default function Game() {
    return (
        <ReduxProvider store={store}>
            <div class="invisible">
                {imgs.map(i => <img src={i} />)}
                {sounds.map(s => <audio src={s}></audio>)}
            </div>
            <Router />
        </ReduxProvider>
    );
}

function Router() {
    const p = useSelector((state: State) => state.page);

    switch (p) {
        case 'menu': return <Menu />;
        case 'credits': return <Credits />;
        case 'intro': return <Intro />;
        case 'host-selection': return <HostSelection />;
        case 'main-scene': return <MainScene />;
        case 'how-to-play': return <HowToPlay />
        case 'game-over': return <GameOverScene />
        default: return <div>Error! (page not found : {p})</div>
    }
}
