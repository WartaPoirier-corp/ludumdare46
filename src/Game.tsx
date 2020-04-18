import React from 'react';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import Credits from './scenes/CreditsScene';
import Intro from './scenes/IntroScene';
import HostSelection from './scenes/HostSelectionScene';
import MainScene from './scenes/MainScene';
import Menu from './scenes/MenuScene';
import SkillsTree from './scenes/SkillsTreeScene';
import { default as store, State } from './store';

export default function Game() {
    return (
        <ReduxProvider store={store}>
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
        case 'skills': return <SkillsTree />;
        default: return <div>Error! (page not found : {p})</div>
    }
}
