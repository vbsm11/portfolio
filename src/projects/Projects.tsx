import React from 'react';
import s from './Projects.module.css'
import containerS from '../common/styles/Container.module.css'
import {Project} from './project/Project';

export function Projects() {
  return (
    <div className={s.projectsBlock}>
        <div className={`${containerS.container} ${s.projectsContainer}`}>
            <h2 className={s.title}>Projects</h2>
            <div className={s.projects}>
                <Project coverLink='' title='Todolist' description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                <Project coverLink='' title='Social network' description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            </div>
        </div>
    </div>
  );
}

