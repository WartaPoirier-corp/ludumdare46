import React, { useCallback } from 'react';
import { SkillDefinition } from '../schema';

interface SkillTreeItemProps {
    skill: SkillDefinition;
    unlocked: boolean;

    unlockSkill(skillId: string): void;
}

export default function SkillTreeItem(props: SkillTreeItemProps) {
    const readableName = props.skill.name || props.skill.id;
    const isRoot = !props.skill.parentId;

    const onClick = useCallback(() => {
        if (!props.unlocked) {
            props.unlockSkill(props.skill.id);
        }
    }, [props.unlocked, props.skill.id, props.unlockSkill]);

    return (
        <button
            className={'skills-tree-item' + (isRoot ? ' root' : '')}
            title={readableName}
            disabled={props.unlocked}
            onClick={onClick}
        >
            {!isRoot && (
                <img
                    src={`/skills/${props.skill.id}.png`}
                    alt={readableName}
                />
            )}
        </button>
    );
}
