import React from 'react';
import { Provider as ReduxProvider, useStore } from 'react-redux';
import store from './store';

export default function Game() {
    return (
        <ReduxProvider store={store}>
            <Message />
        </ReduxProvider>
    );
}

function Message() {
    const store = useStore();

    console.log(store.getState())

    return (
        <div>{store.getState().message}</div>
    );
}
