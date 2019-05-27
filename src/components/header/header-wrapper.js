import React from 'react';
import MenuLinks from './menu-items'
import Lang from '../language/change-language'
import Header from './header'
import { useTranslation } from 'react-i18next'

import './header.css';

const HeaderWrapper = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <Header/>
      <div className="logo"><a href="./">{t('header.title')}</a></div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <MenuLinks/>
        <Lang/>
      </ul>
    </header>
  );
}

export default HeaderWrapper;
