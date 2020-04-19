export interface Event {
    hints: Hint[];
    actions: Action[];
    description: string;
    requires?: string[];
}

export interface Hint {
    category: string;
    description: string;
}

export interface Action {
    title: string;
    outcome: ActionOutcome;
    endMsg: string;
}

export interface ActionOutcome {
    mood: Number;
    energy: Number;
    hunger: Number;
    peepoo: Number;
    health: Number;
}
