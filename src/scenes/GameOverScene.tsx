import React, { useCallback, useMemo } from 'react';
import { useStore } from 'react-redux';
import Button from '../components/Button';
import Gauge from '../components/Gauge';
import { State } from '../store';
import { setHost } from '../store/actions/game';
import { goTo } from '../store/actions/router';

const joinGauges = (gauges: string[]) => {
    if (gauges.length === 0) {
        return 'none of your gauges (that\'s not normal)';
    }
    else if (gauges.length === 1) {
        return 'your ' + gauges[0] + ' gauge';
    }
    else {
        return 'your '
            + gauges.splice(0, gauges.length - 1).join(', ')
            + ' and '
            + gauges[0]
            + ' gauges';
    }
};

export default function GameOverScene() {
    const store = useStore<State>();

    const gameInfo = useMemo(() => {
        const state = store.getState();
        const gauges = state.gauges;
        const emptyGauges = state.gauges
            .filter((g) => g.value <= 0)
            .map((g) => g.name)
            .map((g) => (g === 'peepoo') ? 'pee-poo' : g);

        const emptyGaugesJoined = joinGauges(emptyGauges);

        const isDino = state.host.animal === 'triceratops';
        return {
            gauges: isDino ? [] : gauges,
            emptyGauges,
            emptyGaugesJoined: isDino ? 'all your gauges immediately' : emptyGaugesJoined,
            lastMessage: isDino ? 'Your host has been dead for hundreds of millions of years, were you really hoping not to lose?' : state.lastOutcome,
        };
    }, [])

    const next = useCallback(() => {
        store.dispatch(setHost(null));
        store.dispatch(goTo('menu'));
    }, [store]);

    return (
        <div className="game-over">
            <img src="game_over.png" alt=""/>
            <h1>You just lost. How sad...</h1>
            <h2>{gameInfo.lastMessage}</h2>
            <p>…which made {gameInfo.emptyGaugesJoined} reach zero.</p>
            <div className="gauges">
                {gameInfo.gauges.map((gauge) => (
                    <Gauge
                        key={gauge.name}
                        id={gauge.name}
                        value={gauge.value}
                    />
                ))}
            </div>
            <Button onClick={next}>Okay, go back to the menu</Button>
        </div>
    );
}
