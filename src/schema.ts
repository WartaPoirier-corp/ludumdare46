export interface Event {
    hints: Hint[];
    actions: Action[];
    description: string;
    require?: string[];
    animals: string[],
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

// Skills Tree

export interface SkillDefinition {
    id: string;
    parentId: string | null;
    x: number;
    y: number;
    name?: string;
    description?: string;
}
