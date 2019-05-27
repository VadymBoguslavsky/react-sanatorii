import React from 'react';
import { useTranslation } from 'react-i18next';

const Table = () => {
  const { t } = useTranslation();
  return (
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
  )
}
export default Table;
