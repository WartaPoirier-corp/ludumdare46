import React from 'react';
import { useStore } from 'react-redux';

interface Props {
    onClick?: () => void;
    children?: any[] | any;
}

export default function Button(props: Props = {}) {
    return (
        <a className="button" href="#" {...props}>{props.children}</a>
    );
}
