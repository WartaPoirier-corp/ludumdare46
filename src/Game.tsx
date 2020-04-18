import React from 'react';
import { Provider as ReduxProvider, useStore } from 'react-redux';
import store from './store';
import Menu from './scenes/menu';
import Credits from './scenes/credits';
import Intro from './scenes/intro';
import HostSelection from './scenes/host-selection';
import MainScene from './scenes/main-scene';
import SkillsTree from './scenes/skills';

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
    switch p {
        case 'menu': return <Menu />;
        case 'credits': return <Credits />;
        case 'intro': return <Intro />;
        case 'host-selection': return <Intro />;
        case 'main-scene': return <MainScene />;
        case 'skills': return <SkillsTree />;
        default: return <div>Error! (page not found : {p})</div>
    }
}
