import { SKILL_POINTS_INCREMENT, SKILL_UNLOCK } from '../actions/skills';

export function pointsReducer(points = 0, action) {
    switch (action.type) {
        case SKILL_POINTS_INCREMENT: return points + 1;
        case SKILL_UNLOCK: return points - 5;
        default: return points;
    }
}

export function skillsReducer(skills = [], action) {
    switch(action.type) {
        case SKILL_UNLOCK: return [...skills, action.skillId];
        default: return skills;
    }
}
