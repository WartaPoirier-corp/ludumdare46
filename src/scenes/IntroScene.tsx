import React from 'react';
import { useDispatch } from 'react-redux';
import { goTo } from '../store/actions/router';
import Button from '../components/Button';

export default function IntroScene() {
    const dispatch = useDispatch();
    const selection = React.useCallback(() => {
        dispatch(goTo('host-selection'));
    }, []);
    return (
        <div>
            TODO: Intro
            <Button onClick={selection}>Go to host selection</Button>
        </div>
    );
}
