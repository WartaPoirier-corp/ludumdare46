import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import Gauge from '../components/Gauge';
import IconButton from '../components/IconButton';
import ModalSkillsTree from '../components/ModalSkillsTree';
import { State } from '../store';
import { clearOutcome, handleEvent } from '../store/actions/game';
import { goTo } from '../store/actions/router';
import { incrementPoints } from '../store/actions/skills';

export default function MainScene() {
    const [skillsOpen, setSkillsOpen] = useState(false);

    const closeSkills = useCallback(() => {
        setSkillsOpen(false);
    }, [setSkillsOpen]);

    const { gauges, event, skills, host, lastOutcome, totalScore, points } = useSelector((state: State) => {
        return {
            gauges: state.gauges,
            event: state.event,
            skills: state.skills,
            host: state.host,
            lastOutcome: state.lastOutcome,
            totalScore: state.totalScore,
            points: state.points,
        };
    });

    const dispatch = useDispatch();
    React.useEffect(() => {
        if (gauges.some(x => x.value < 0)) {
            dispatch(goTo('game-over'));
        }
    }, [gauges]);

    const openSkills = React.useCallback(() => {
        dispatch(clearOutcome());
        setSkillsOpen(true);
    }, [dispatch]);

    const openMenu = React.useCallback(() => {
        dispatch(goTo('menu'));
    }, [dispatch]);

    const handle = React.useCallback((id) => {
        dispatch(handleEvent(event.actions[id], host.animal));
        dispatch(incrementPoints());
    }, [dispatch, event, host]);

    const nextEvent = React.useCallback(() => {
        dispatch(clearOutcome());
    }, [dispatch]);

    const visibleGauges = gauges.filter(g => g.name === 'hunger' || g.name === 'energy' || g.name === 'mood' || g.name === 'peepoo');

    return (
        <div className="main-scene">
            <ModalSkillsTree visible={skillsOpen} onClose={closeSkills} />
            <header>
                <nav>
                    <IconButton on={false} iconOn='/icons/menu.png' iconOff='/icons/menu.png' altOn='Menu' altOff='Menu' onToggle={openMenu} />
                </nav>
                <main>
                    {visibleGauges.map(g => (<Gauge key={g.name} id={g.name} value={g.value} />))}
                </main>
                <p>Day {1 + Math.floor(totalScore / 4)}</p>
            </header>
            <main>
                {lastOutcome !== null ?
                <div className="outcome">
                    <p>{lastOutcome}</p>
                    {points === 5 ? <>
                            <p>You also have enough points to unlock a new skill, to better understand your host!</p>
                            <Button onClick={openSkills}>Choose a new skill</Button>
                        </> : <Button onClick={nextEvent}>Okay</Button>}
                </div>:
                event !== null ?
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
                            <img alt="Your host" src={`/animals/para-${host.animal}.png`} />
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
