import React from 'react';
import { useStore } from 'react-redux';
import { play } from '../audio';

interface Props {
    onClick?: () => void;
    children?: any[] | any;
}

export default function Button(props: Props = {}) {
    const onClick = React.useCallback(() => {
        play('/audio/click.mp3');
        props.onClick();
    }, [props.onClick]);
    return (
        <a className="button" href="#" onClick={onClick}>{props.children}</a>
    );
}
