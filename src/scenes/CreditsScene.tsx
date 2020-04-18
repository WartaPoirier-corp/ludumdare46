import React from 'react';
import { useDispatch } from 'react-redux';
import { goTo } from '../store/actions/router';
import Button from '../components/Button';

export default function CreditsScene() {
    const dispatch = useDispatch();
    const back = React.useCallback(() => {
        dispatch(goTo('menu'));
    }, []);
    return (
        <div className="credits">
            <h1>Credits</h1>
            <p>
                This game have been made by a small team of french students during
                the 46<sup>th</sup> Ludum Dare.
            </p>
            <ul>
                <li><b>Mathis Grange</b> did most of the level design.</li>
                <li><b>Mattéo Decorsaire</b> and <b>Pénélope Douet</b> made all our icons and graphical assets.</li>
                <li><b>Clara Poirier</b> composed the musics and recorded the sounds of the game.</li>
                <li><b>Baptiste Gelez</b> and <b>Edgar Onghena</b> wrote the code.</li>
            </ul>
            <p>
                You can see <a href="https://github.com/WartaPoirier-corp/ludumdare46">the code
                on GitHub</a>, and the presentation of the project <a href="https://ldjam.com/events/ludum-dare/46/$192299">
                    on the Ludum Dare website
                </a>. We hope that you enjoyed our game!
            </p>
            <Button onClick={back}>Back to main menu</Button>
        </div>
    );
}
