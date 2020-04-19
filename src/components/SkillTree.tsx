import React, { useCallback, useMemo } from 'react';
import { SkillDefinition } from '../schema';
import SkillTreeItem from './SkillTreeItem';

interface SkillTreeProps {
    skills: SkillDefinition[];
    unlockedSkills: string[];

    unlockSkill(skillId: string): void;
}

const treeGridSizeFor = (skills: SkillDefinition[]) => skills
    .reduce(([x1, y1], { x, y }) => [
        Math.max(x1, x),
        Math.max(y1, y),
    ] as const, [0, 0] as const);

const centerOfDiv = (div: HTMLDivElement) => [
    div.offsetLeft + (div.clientWidth / 2),
    div.offsetTop + (div.clientHeight / 2),
] as const;

export default function SkillTree(props: SkillTreeProps) {
    const skills = props.skills;

    const [gridSizeX, gridSizeY] = useMemo(
        () => treeGridSizeFor(skills), [skills],
    );

    const canvasRef = useCallback((canvas: HTMLCanvasElement) => {
        if (!canvas) return;

        const container = canvas.parentElement!;

        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        const context = canvas.getContext('2d')!;
        context.strokeStyle = 'white';

        const treeNodeDivs = Array.from(
            container.querySelectorAll('div'),
        );

        for (const cellDiv of treeNodeDivs) {
            const parentId = cellDiv.getAttribute('data-parent-id');
            const parentNodeDiv =
                container.querySelector(`[data-id="${parentId}"]`);

            if (parentNodeDiv) {
                const [cx, cy] = centerOfDiv(parentNodeDiv as any);
                const [x, y] = centerOfDiv(cellDiv);

                context.beginPath();
                context.moveTo(cx, cy);
                context.lineTo(x, y);
                context.stroke();
            }
        }
    }, []);

    const isUnlocked = useCallback((skill: SkillDefinition) => {
        return !skill.parentId || props.unlockedSkills.includes(skill.id);
    }, [props.unlockedSkills]);

    const isVisible = useCallback((skill: SkillDefinition) => {
        const parent = skills.find((s) => s.id === skill.parentId);
        return isUnlocked(skill) || (parent && isUnlocked(parent));
    }, [skills, props.unlockedSkills]);

    return (
        <div
            style={{
                position: 'relative',
                display: 'grid',
                width: '100%',
                height: '100%',
                gridTemplateColumns: `repeat(${gridSizeX + 1}, 1fr)`,
                gridTemplateRows: `repeat(${gridSizeY + 1}, 1fr)`,
            }}
        >
            {skills.filter(isVisible).map((skill: SkillDefinition) => (
                <div
                    key={skill.id}
                    style={{
                        gridColumn: skill.x + 1,
                        gridRow: skill.y + 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                    }}
                    data-id={skill.id}
                    data-parent-id={skill.parentId}
                >
                    <SkillTreeItem
                        skill={skill}
                        unlocked={isUnlocked(skill)}
                        unlockSkill={props.unlockSkill}
                    />
                </div>
            ))}
            <canvas
                // @ts-ignore
                ref={canvasRef}
                style={{
                    gridColumn: `1 / ${gridSizeX + 2}`,
                    gridRow: `1 / ${gridSizeY + 2}`,
                }}
            />
        </div>
    );
}
