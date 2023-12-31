import React from 'react';
import s from './Main.module.css'
import containerS from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={containerS.container}>
                <div className={s.text}>
                <span>
                    Hi there
                </span>
                    <h1>
                        I am Jeffrey Aaron
                    </h1>
                    <p>
                        Frontend developer
                    </p>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
}