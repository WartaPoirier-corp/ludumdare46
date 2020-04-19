import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import { State } from '../store';

export default function MainScene() {
    const { gauges, event } = useSelector((state: State) => {
        return {
            gauges: state.gauges.filter(g => state.skills.indexOf(g.name) >= 0),
            event: {
                description: 'You are in front of something…',
                hints: [ 'It makes small noises', 'It smells like shit', 'It is yellow', 'It makes you angry' ],
                actions: [ 'Attack', 'Seduce', 'Flee' ],
            },
        };
    });
    return (
        <div className="main-scene">
            <header>
                <nav>
                    <IconButton on={false} iconOn='/icons/menu.png' iconOff='/icons/menu.png' altOn='Menu' altOff='Menu' />
                </nav>
                <main>
                    {gauges.map(g => (<Gauge id={g.name} value={g.value} />))}                    
                </main>
                <nav>
                    <IconButton on={false} iconOn='/icons/dna.png' iconOff='/icons/dna.png' altOn='Skills' altOff='Skills' />
                </nav>
            </header>
            <main>
                {event !== null ?
                    <>
                        <p className="description">{event.description}</p>
                        <section className="hints">
                            {event.hints.map(h => (<div style={{ animationDuration: `${5 + Math.floor(Math.random() * 10)}s` }} className="card">{h}</div>))}
                        </section>
                        <img alt="The parasite" src="/animals/parasite.png" />
                        <section className="choices">
                            {event.actions.map(a => (
                                <Button>{a}</Button>
                            ))}
                        </section>
                    </>
                    : <p className="description">Nothing is happening… yet.</p>
                }
            </main>
        </div>
    );
}

function Gauge(props = { id: 'hunger', value: 0.5 }) {
    const size = props.value * 100;
    return (
        <div className={"gauge " + props.id}>
            <img src="todo" alt={props.id} />
            <main>
                <div className="fill" style={{ width: `${size}%`}}></div>
            </main>
        </div>
    );
}
