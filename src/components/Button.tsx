import React from 'react';
import { useStore } from 'react-redux';

export default function Button(props = {}) {
    return (
        <a className="button" href="#" ...{props}>{props.children}</a>
    );
}
