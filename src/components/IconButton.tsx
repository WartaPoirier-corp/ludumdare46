import React from 'react';
import { useStore } from 'react-redux';

export default function Button(props = {}) {
    const [state, setState] = React.useState({
        on: !!props.on,
        icon: !!props.on ? props.iconOn: props.iconOff,
        alt: !!props.on ? props.altOn : props.altOff
    });
    const onToggle = React.useCallback(() => {
        setState({
            on: !state.on,
            icon: !state.on ? props.iconOn : props.iconOff,
            alt: !state.on ? props.altOn : props.altOff
        });
        if (props.onToggle) {
            props.onToggle(!state.on);
        }
    });
    const icon = (<img src={state.icon} alt={state.alt} />);
    return (
        <a className={"icon-button " + (state.on ? 'on' : 'off')}
            onClick={onToggle}
            href="#"
            title={state.alt}
        >
            {props.children && props.children.length() > 0 ? props.children : icon}
        </a>
    );
}
