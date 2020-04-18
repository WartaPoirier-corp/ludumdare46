import React, { useMemo } from 'react';
import { SkillDefinition } from '../schema';
import SkillTreeItem from './SkillTreeItem';

interface SkillTreeProps {
    skills: SkillDefinition[];
}

const treeGridSizeFor = (skills: SkillDefinition[]) => skills
    .reduce(([x1, y1], { x, y }) => [
        Math.max(x1, x),
        Math.max(y1, y),
    ] as const, [0, 0] as const);

export default function SkillTree(props: SkillTreeProps) {
    const gridSize = useMemo(
        () => treeGridSizeFor(props.skills), [props.skills],
    );

    return (
        <div
            style={{
                display: 'grid',
                width: '100%',
                height: '100%',
                gridTemplateColumns: `repeat(${gridSize[0] + 1}, 1fr)`,
                gridTemplateRows: `repeat(${gridSize[1] + 1}, 1fr)`,
            }}
        >
            {props.skills.map((skill: SkillDefinition) => (
                <div
                    key={skill.id}
                    style={{
                        gridColumn: skill.x + 1,
                        gridRow: skill.y + 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <SkillTreeItem skill={skill} />
                </div>
            ))}
        </div>
    );
}
