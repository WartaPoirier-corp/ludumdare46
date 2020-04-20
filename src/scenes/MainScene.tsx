import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import { State } from '../store';
import { goTo } from '../store/actions/router';
import { handleEvent } from '../store/actions/game';

export default function MainScene() {
    const { gauges, event, skills, host, lastOutcome } = useSelector((state: State) => {
        return {
            gauges: state.gauges.filter(g => g.name === 'hunger' || g.name === 'energy' || g.name === 'mood' || g.name === 'peepoo'),
            event: state.event,
            skills: state.skills,
            host: state.host,
            lastOutcome: state.lastOutcome,
        };
    });
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (gauges.some(x => x.value < 0)) {
            dispatch(goTo('game-over'));
        }
    }, [gauges]);
    const openMenu = React.useCallback(() => {
        dispatch(goTo('menu'));
    }, [dispatch]);
    const handle = React.useCallback((id) => {
        dispatch(handleEvent(event.actions[id], host.animal))
    }, [dispatch, event, host]);

    return (
        <div className="main-scene">
            <header>
                <nav>
                    <IconButton on={false} iconOn='/icons/menu.png' iconOff='/icons/menu.png' altOn='Menu' altOff='Menu' onToggle={openMenu} />
                </nav>
                <main>
                    {gauges.map(g => (<Gauge key={g.name} id={g.name} value={g.value} />))}                    
                </main>
            </header>
            <main>
                {lastOutcome !== null ? <p className="description">{lastOutcome}</p> : null}
                {event !== null ?
                    <>
                        <p className="description">{event.description}</p>
                        <section className="hints">
                            {event.hints
                                .filter(h => skills.indexOf(h.category) >= 0)
                                .map((h, i) =>
                                      (<div style={{
                                          animationDuration: `${5 + Math.floor(Math.random() * 10)}s` }}
                                          className="card"
                                          key={i}
                                      >
                                        <img
                                            className={`icon ${h.category.slice(0, -2)}`}
                                            src={`/skills/${h.category}.png`}
                                            title={`Provided by ${h.category}`}
                                            alt={`Provided by ${h.category} :`} />
                                        <span>{h.description}</span>
                                    </div>)
                                )}
                        </section>
                        <div className="illus">
                            <img alt="The parasite" src="/animals/parasite.png" />
                            <img alt="Your host" src={`/animals/${host.animal}.png`} />
                        </div>
                        <section className="choices">
                            {event.actions.map((a, i) => (
                                <Button onClick={handle.bind(this, i)} key={i}>{a.title}</Button>
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
            <img src={`/icons/gauges/${props.id}.png`} alt={props.id} />
            <main>
                <div className="fill" style={{ width: `${size}%`}}></div>
            </main>
        </div>
    );
}
