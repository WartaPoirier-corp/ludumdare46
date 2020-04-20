import React from 'react';

export default function Gauge(props = { id: 'hunger', value: 0.5 }) {
    let size = props.value * 100;
    if (size === NaN || size <= 0) {
        size = 0;
    }
    return (
        <div className={"gauge " + props.id}>
            <img src={`/icons/gauges/${props.id}.png`} alt={props.id} />
            <main>
                <div className="fill" style={{ width: `${size}%` }}></div>
            </main>
        </div>
    );
}
