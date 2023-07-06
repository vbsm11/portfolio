import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    coverLink: string
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.cover}>
                <a className={s.button} href="">View</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
}

