import React from 'react';
import SkillTree from '../components/SkillTree';
import skills from '../data/skills.json';

export default function SkillsTreeScene() {
    return (
        <div>
            <SkillTree skills={skills} />
        </div>
    )
}
