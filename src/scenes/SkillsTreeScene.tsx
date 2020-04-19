import React from 'react';
import { useSelector } from 'react-redux';
import SkillTree from '../components/SkillTree';
import skills from '../data/skills.json';
import { State } from '../store/reducers';

export default function SkillsTreeScene() {
    const unlockedSkills = useSelector((state: State) => state.skills);
    unlockedSkills.push('feelings-1');

    return (
        <div>
            <SkillTree skills={skills} unlockedSkills={unlockedSkills} />
        </div>
    )
}
