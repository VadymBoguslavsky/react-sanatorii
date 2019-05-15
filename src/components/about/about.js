import React from 'react';
import menuLinks from './menu-items'
import Table from './table'
import MainInfo from './main-info'

import { useTranslation } from 'react-i18next';

import './about.css'

const About = () => {
  const { t } = useTranslation();
  return (
    <div className = 'about'>
      <h1 id="about__san">{t('about.title')}</h1>
      <div className="text">
        <div className="menu__about">
          <ul>
            {menuLinks}
          </ul>
        </div>
        <div className="about__img"></div>
      </div>
      <div className="text__about">
        <div className="text__wrapper">
          <MainInfo/>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default About;
