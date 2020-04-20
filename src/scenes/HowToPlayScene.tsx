import React from 'react';
import { useDispatch } from 'react-redux';
import { goTo } from '../store/actions/router';
import Button from '../components/Button';

export default function HowToPlayScene() {
    const dispatch = useDispatch();
    const back = React.useCallback(() => {
        dispatch(goTo('menu'));
    }, []);
    return (
        <div className="credits">
            <h1>How to play?</h1>
            <p>
                On the main game screen, you are presented events that happens to the animal hosting you, the parasite.
                Only a very short description of these events is given, and you should use the floating indications
                and your imagination to understand what is going on, and make the right choice.
            </p>
            <p>
                If you survive long enough, you will have the possibility to unlock new « skills », to view more indications
                about each event.
            </p>
            <p>
                Of course, the goal is to keep your host alive as long as possible. To guide you, gauges representing various
                needs are at the top of the screen. Make sure to keep them full, otherwise your host will die, and so will you.
                Generally: don't make choices that may threaten your host, the gauges are only here to help, but your comrade may
                die for other reasons.
            </p>
            <Button onClick={back}>Back to main menu</Button>
        </div>
    );
}
