import React from 'react';
import Button from '../components/Button';
import { goTo } from '../store/actions/router';
import { setHost, handleEvent } from '../store/actions/game';
import { useDispatch } from 'react-redux';
import { play } from '../audio';

export default function HostSelectionScene() {
    const dispatch = useDispatch();
    const choices = [
        {
            name: 'Otter : easy',
            id: 'otter',
            icon: '/animals/otter.png',
            description: 'Minions ipsum poopayee potatoooo poulet tikka masala poulet tikka masala la bodaaa uuuhhh hahaha wiiiii tulaliloo. Tatata bala tu la bodaaa pepete hana dul sae.'
        },
        {
            name: 'Cat : medium',
            id: 'cat',
            icon: '/animals/cat.png',
            description: 'Belloo! me want bananaaa! Ti aamoo! Jiji bee do bee do bee do tank yuuu! Hahaha.'
        },
                {
            name: 'Dog : hard',
            id: 'dog',
            icon: '/animals/dog.png',
            description: 'Poopayee poopayee me want bananaaa! Potatoooo la bodaaa jiji jiji ti aamoo! Ti aamoo!  Para tú poopayee.'
        },
        {
            name: 'Triceratops : hardcore',
            id: 'triceratops',
            icon: '/animals/triceratops.png',
            description: 'Underweaaar aaaaaah bananaaaa poulet tikka masala tulaliloo. Poulet tikka masala daa aaaaaah me want bananaaa! Ti aamoo! Hana dul sae uuuhhh bappleees jiji uuuhhh tank yuuu!'
        },
    ];
    const go = (id) => React.useCallback(() => {
        play(`/audio/${id}.mp3`);
        dispatch(setHost(id));
        dispatch(handleEvent(0)); // generate a first event
        dispatch(goTo('main-scene'));
    }, []);

    return (
        <div className="host-selection">
            <p>
                Select your future host! Each of them have different caracteristics
                and life-styles.
            </p>
            <main>
                {choices.map(c => {
                    return (
                        <div key={c.id} className="card">
                            <h1>{c.name}</h1>
                            <img src={c.icon} alt={c.name} />
                            <p className="main">{c.description}</p>
                            <Button onClick={go(c.id)}>Choose</Button>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
