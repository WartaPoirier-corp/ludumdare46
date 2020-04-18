import React from 'react';
import { Provider as ReduxProvider, useStore } from 'react-redux';
import Credits from './scenes/CreditsScene';
import Intro from './scenes/IntroScene';
import MainScene from './scenes/MainScene';
import Menu from './scenes/MenuScene';
import SkillsTree from './scenes/SkillsTreeScene';
import store from './store';

export default function Game() {
    return (
        <ReduxProvider store={store}>
            <Router />
        </ReduxProvider>
    );
}

function Router() {
    const store = useStore();
    const p = store.getState().page;

    switch (p) {
        case 'menu': return <Menu />;
        case 'credits': return <Credits />;
        case 'intro': return <Intro />;
        case 'host-selection': return <Intro />;
        case 'main-scene': return <MainScene />;
        case 'skills': return <SkillsTree />;
        default: return <div>Error! (page not found : {p})</div>
    }
}
