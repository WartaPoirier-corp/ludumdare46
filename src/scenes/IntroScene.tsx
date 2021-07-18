import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import introText from '../data/intro_text.json';
import { goTo } from '../store/actions/router';

export default function IntroScene() {
    const dispatch = useDispatch();

    const next = useCallback(() => {
        dispatch(goTo('host-selection'));
    }, []);

    return (
        <div className="intro">
            <div className="intro-text">
                {introText.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>
            <Button onClick={next}>Okay, let's go</Button>
        </div>
    );
}
