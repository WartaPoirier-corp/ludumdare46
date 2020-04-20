import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkillTree from '../components/SkillTree';
import skills from '../data/skills.json';
import { goTo } from '../store/actions/router';
import { unlockSkill } from '../store/actions/skills';
import { State } from '../store/reducers';

export default function SkillsTreeScene() {
    const dispatch = useDispatch();
    const unlockedSkills = useSelector((state: State) => state.skills);

    const onUserUnlockSkill = useCallback((skillId: string) => {
        dispatch(unlockSkill(skillId));
        dispatch(goTo('main-scene'));
    }, [dispatch]);

    return (
        <div>
            <SkillTree
                skills={skills}
                unlockedSkills={unlockedSkills}
                unlockSkill={onUserUnlockSkill}
            />
        </div>
    )
}
