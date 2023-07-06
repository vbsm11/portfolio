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
                <div className={s.button}>
                    <a href="">View</a>
                </div>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
}

