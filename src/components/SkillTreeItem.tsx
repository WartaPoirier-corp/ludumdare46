import React from 'react';
import { SkillDefinition } from '../schema';

interface SkillTreeItemProps {
    skill: SkillDefinition;
    unlocked: boolean;
}

export default function SkillTreeItem(props: SkillTreeItemProps) {
    const readableName = props.skill.name || props.skill.id;

    return (
        <button
            title={readableName}
            style={{
                height: '4em',
                width: '4em',
                border: `2px solid ${props.unlocked ? '#3f4d6c' : '#49ffea'}`,
                borderRadius: '0.5em',
                padding: '0.3em',
                background: '#252444',
            }}
        >
            {props.skill.icon &&
                <img
                    src={`/skills/${props.skill.icon}`}
                    alt={readableName}
                    style={{ width: '100%' }}
                />
            }
        </button>
    );
}
