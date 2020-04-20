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
            description: `
                This very cute-looking animal lives apart of humans, but from time to time,
                they are studied by them, so I need to be a little bit careful. It will
                still be easier then every other host. I should begin with this one
                if it's the first time I travel to Earth.`
        },
        {
            name: 'Cat : medium',
            id: 'cat',
            icon: '/animals/cat.png',
            description:
                `In his eyes, there's a look that says "I'm a lot better than all of you, peasants".
                But he looks very independant, so it wont be very hard to hide. On the other hand,
                he still looks close to humans. Or at least, humans treasure this animal.
                So he wont be as easier as it seems.`
        },
                {
            name: 'Dog : hard',
            id: 'dog',
            icon: '/animals/dog.png',
            description:
                `This one looks a little bit stupid, but at least he's bigger then the otter and the
                cat. But because normally his choices are quite logical, it will be harder to hide and
                not be discovered. I need to be extremely careful if I chose this one.`
        },
        {
            name: 'Triceratops : hardcore',
            id: 'triceratops',
            icon: '/animals/triceratops.png',
            description:
                `Wow. This one is really huge. With its horns, I think it can destroy everything, even if
                it looks a little bit tired. It's like a tank. I can be invincible if I chose
                this one, but it will also be a lot harder then the others. `
        },
    ];
    const go = (id) => React.useCallback(() => {
        play(`/audio/${id}.mp3`);
        dispatch(setHost(id));
        dispatch(handleEvent(0, id)); // generate a first event
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
