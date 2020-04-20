import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { State as InnerState, reducers, initialState } from './reducers'

export type State = InnerState;

export default createStore(
    reducers, // Initialization reducer
    initialState,
    // save everything but the page (so that we restart on the menu),
    // and musicOn (because it needs to be manually triggered)
    compose(persistState([ 'host', 'gauges', 'points', 'totalScore', 'skills', 'event', 'soundOn', 'lastOutcome' ]))
);
