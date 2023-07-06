import React from 'react';
import s from './Nav.module.css'

export function Nav() {
  return (
    <div className={s.nav}>
      <a href="src/header/nav/Nav">Главная</a>
      <a href="src/header/nav/Nav">Скиллы</a>
      <a href="src/header/nav/Nav">Проекты</a>
      <a href="src/header/nav/Nav">Контакты</a>
    </div>
  );
}

