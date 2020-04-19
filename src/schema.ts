export interface Choice {
    hints: Hint[];
    actions: Action[];
}

type HintCategory = 'sound' | 'visual' | 'smell' | 'feelings' | 'basic-needs';

export interface Hint {
    category: HintCategory;
    actions: (string | null)[];
}

export interface Action {
    title: string;
    outcome: ActionOutcome[];
}

type Gauge = 'mood' | 'energy' | 'hunger' | 'peepoo';

export interface ActionOutcome {
    gauge: Gauge;
    variation: Number;
}

// Skills Tree

export interface SkillDefinition {
    id: string;
    parentId: string | null;
    x: number;
    y: number;
    name?: string;
    description?: string;
}
