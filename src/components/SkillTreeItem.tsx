import React, { useCallback } from 'react';
import { SkillDefinition } from '../schema';

interface SkillTreeItemProps {
    skill: SkillDefinition;
    unlocked: boolean;

    unlockSkill(skillId: string): void;
}

export default function SkillTreeItem(props: SkillTreeItemProps) {
    const readableName = props.skill.name || props.skill.id;

    const onClick = useCallback(() => {
        if (!props.unlocked) {
            props.unlockSkill(props.skill.id);
        }
    }, [props.unlocked, props.skill.id, props.unlockSkill]);

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
            onClick={onClick}
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
