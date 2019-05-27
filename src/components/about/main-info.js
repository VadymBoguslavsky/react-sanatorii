import React from 'react';
import { useTranslation } from 'react-i18next';
const MainInfo = () => {
  const { t } = useTranslation();
  return (
    <div>
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
    </div>
  )
}
export default MainInfo;
