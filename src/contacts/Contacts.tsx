import React from 'react';
import s from './Contacts.module.css'
import containerS from '../common/styles/Container.module.css'

export function Contacts() {
  return (
    <div className={s.contactsBlock}>
        <div className={`${containerS.container} ${s.contactsContainer}`}>
            <h2 className={s.title}>Contacts</h2>
            <form className={s.form}>

            </form>
        </div>
    </div>
  );
}

