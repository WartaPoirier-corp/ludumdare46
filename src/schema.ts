interface Choice {
    hints: Hint[];
    actions: Action[];
}

type HintCategory = 'sound' | 'visual' | 'smell' | 'feelings' | 'basic-needs';

interface Hint {
    category: HintCategory;
    actions: string?[];    
}

interface Action {
    title: string;
    outcome: ActionOutcome[];
}

type Gauge = 'mood' | 'energy' | 'hunger' | 'peepoo';

interface ActionOutcome {
    gauge: Gauge;
    variation: Number;
}
