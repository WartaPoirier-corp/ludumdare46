import React from 'react';
import { useStore } from 'react-redux';
import { play } from '../audio';

interface Props {
    on: Boolean;
    iconOn: string;
    iconOff: string;
    altOff: string;
    altOn: string;
    onToggle?: (on: Boolean) => void;
    children?: any[];
}

export default function Button(props: Props = {
    on: true,
    iconOn: '',
    iconOff: '',
    altOff: '',
    altOn: ''
}) {
    const iconSrc = !!props.on ? props.iconOn: props.iconOff;
    const alt = !!props.on ? props.altOn : props.altOff;
    const onToggle = React.useCallback(() => {
        play('/audio/click.mp3');
        if (props.onToggle) {
            props.onToggle(!props.on);
        }
    }, [props]);
    const icon = (<img src={iconSrc} alt={alt} />);
    return (
        <a className={"icon-button " + (props.on ? 'on' : 'off')}
            onClick={onToggle}
            href="#"
            title={alt}
            >
            {props.children && props.children.length > 0 ? props.children : icon}
        </a>
    );
}
