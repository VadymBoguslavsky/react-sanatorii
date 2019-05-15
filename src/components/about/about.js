import React from 'react';
import menuLinks from './menu-items'
import './about.css'
import { useTranslation } from 'react-i18next';

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
          <div>
            <h1 id="services">{t('about.services-title')}</h1>
            <p>{t('about.services')}</p>
          </div>
          <div>
            <h1 id="recovery">{t('about.recovery-title')}</h1>
            <p>{t('about.recovery')}</p>
          </div>
          <div>
            <h1 id="entertainment">{t('about.entertainment-title')}</h1>
            <p>{t('about.entertainment')}</p>
          </div>
          <div>
            <h1 id="live">{t('about.live-title')}</h1>
            {t('about.live')}
          </div>
          <div>
            <h1 id="food">{t('about.food-title')}</h1>
            <p>{t('about.food')}</p>
          </div>
          <div>
            <h1 id="contacts">{t('about.contacts-title')}</h1>
            <p>{t('about.contacts')}</p>
            <div className="phone__number">
              <a href="tel:+38 (097) 90 42 553">+38 (097) 90 42 553</a>
              <a href="tel:+38 (067) 75 76 844">+38 (067) 75 76 844</a>
              <a href="tel:+38 (066) 73 55 190">+38 (066) 73 55 190</a>
            </div>
          </div>
          <div className="price">
            <h1 id="prices">
              <span>{t('about.prices-before')}</span>
              <span> {new Date().getFullYear()} </span>
              <span>{t('about.prices-after')}</span>
            </h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>{t('about.appartments')}</td>
                  <td>{t('about.appartments-prices')}</td>
                </tr>
                <tr>
                  <td>{t('about.appartments-for-two')}</td>
                  <td>{t('about.from')} 450 ₴</td>
                </tr>
                <tr>
                  <td>{t('about.appartments-for-three')}</td>
                  <td>{t('about.from')} 400 ₴</td>
                </tr>
                <tr>
                  <td>{t('about.appartments-lux')}</td>
                  <td>{t('about.from')} 500 ₴</td>
                </tr>
                <tr>
                  <td>{t('about.appartments-super-lux')}</td>
                  <td>{t('about.from')} 550 ₴</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
