import React from 'react';
import s from './Skills.module.css'
import containerS from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export function Skills() {
  return (
    <div className={s.skillsBlock}>
        <div className={`${containerS.container} ${s.skillsContainer}`}>
            <h2 className={s.title}>Skills</h2>
            <div className={s.skills}>
                <Skill iconLink='' title='HTML/CSS' description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                <Skill iconLink='' title='JS' description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <Skill iconLink='' title='React' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
            </div>
        </div>
    </div>
  );
}

