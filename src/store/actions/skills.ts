export const SKILL_POINTS_INCREMENT = 'SKILL_POINTS_INCREMENT';
export const SKILL_UNLOCK = 'SKILL_UNLOCK';

export function incrementPoints() {
    return {
        type: SKILL_POINTS_INCREMENT,
    };
}

export function unlockSkill(id: string) {
    return {
        type: 'SKILL_UNLOCK',
        skillId: id,
    };
}
