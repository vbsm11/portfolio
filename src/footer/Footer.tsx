import React from 'react';
import s from './Footer.module.css'
import containerS from '../common/styles/Container.module.css'

export function Footer() {
  return (
    <div className={s.footerBlock}>
        <div className={`${containerS.container} ${s.footerContainer}`}>
            <h2 className={s.title}>Jeffrey Aaron</h2>
            <div className={s.icons}>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
            </div>
            <span className={s.text}>© 2023 Все права защищены</span>
        </div>
    </div>
  );
}

