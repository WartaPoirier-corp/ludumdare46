import React from 'react';
import { useStore } from 'react-redux';

export default function Button(props = {}) {
    const [state, setState] = React.useState({
        on: !!props.on,
    });
    const onToggle = React.useCallback(() => {
        setState({
            on: !state.on
        });
        props.onToggle(!state.on);
    });
    const iconSrc = state.on ? props.onIcon : props.offIcon;
    const alt = state.on ? props.onAlt : props.offAlt;
    const icon = (<img src={iconSrc} alt={alt} />);
    return (
        <a className={"icon-button " + (state.on ? 'on' : 'off')}
            onClick={onToggle}
            href="#"
            title={alt}
        >
            {props.children && props.children.length() > 0 ? props.children : icon}
        </a>
    );
}
