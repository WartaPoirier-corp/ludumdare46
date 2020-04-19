import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSize } from 'react-hook-size';
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

    const container = useRef<HTMLDivElement>();
    const canvasRef = useRef<HTMLCanvasElement>();

    const containerSize = useSize(container);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const container = canvas.parentElement!;

        canvas.width = containerSize.width || 0;
        canvas.height = containerSize.height || 0;

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
    }, [containerSize, skills, props.unlockedSkills]);

    const isUnlocked = useCallback((skill: SkillDefinition) => {
        return !skill.parentId || props.unlockedSkills.includes(skill.id);
    }, [props.unlockedSkills]);

    const isVisible = useCallback((skill: SkillDefinition) => {
        const parent = skills.find((s) => s.id === skill.parentId);
        return isUnlocked(skill) || (parent && isUnlocked(parent));
    }, [skills, props.unlockedSkills]);

    return (
        <div
            // @ts-ignore
            ref={container}
            className="skills-tree"
            style={{
                gridTemplateColumns: `repeat(${gridSizeX + 1}, 1fr)`,
                gridTemplateRows: `repeat(${gridSizeY + 1}, 1fr)`,
            }}
        >
            {skills.filter(isVisible).map((skill: SkillDefinition) => (
                <div
                    key={skill.id}
                    className="skills-tree-item-container"
                    style={{
                        gridColumn: skill.x + 1,
                        gridRow: skill.y + 1,
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
