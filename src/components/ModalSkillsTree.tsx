import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import skills from '../data/skills.json';
import { unlockSkill } from '../store/actions/skills';
import { State } from '../store/reducers';
import SkillTree from './SkillTree';

interface ModalSkillsTreeProps {
    visible: boolean;
    onClose(): void;
}

export default function ModalSkillsTree(props: ModalSkillsTreeProps) {
    const dispatch = useDispatch();
    const unlockedSkills = useSelector((state: State) => state.skills);

    const onUserUnlockSkill = useCallback((skillId: string) => {
        dispatch(unlockSkill(skillId));
        props.onClose();
    }, [dispatch]);

    return (
        <div className="modal-skills-tree" data-visible={props.visible}>
            <dialog>
                <SkillTree
                    skills={skills}
                    unlockedSkills={unlockedSkills}
                    unlockSkill={onUserUnlockSkill}
                />
            </dialog>
        </div>
    );
}
