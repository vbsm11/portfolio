import React from 'react';
import s from './Contacts.module.css'
import containerS from '../common/styles/Container.module.css'
import buttonS from '../common/styles/Button.module.css'

export function Contacts() {
  return (
    <div className={s.contactsBlock}>
        <div className={`${containerS.container} ${s.contactsContainer}`}>
            <h2 className={s.title}>Contacts</h2>
            <form className={s.form}>
                <input type="text"/>
                <input type="text"/>
                <textarea/>
            </form>
            <a className={buttonS.button} href="">Submit</a>
        </div>
    </div>
  );
}

