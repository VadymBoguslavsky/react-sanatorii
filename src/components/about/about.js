import React from 'react';
import { Link } from "react-scroll";

import './about.css'

const About = () => {

  return (
    <div className = 'about'>
      <h1 id="about__san">Про Джерельний</h1>
      <div className="text">
        <div className="menu__about">
          <ul>
            <Link to="recovery"
               spy={true}
               smooth={true}
               offset={-70}
               duration= {500}>Лікування та оздоровлення</Link>
            <li>
              <Link to="services"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration= {500}>Послуги</Link>
            </li>
            <li className="decor">
              <Link to="recovery"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration= {500}>Лікування та оздоровлення</Link>
            </li>
            <li className="decor">
              <Link to="entertainment"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration= {500}>Розваги і спорт</Link>
            </li>
            <li className="decor">
              <Link to="live"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration= {500}>Проживання</Link>
            </li>
            <li className="decor">
              <Link to="food"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration= {500}>Харчування</Link>
            </li>
            <li className="decor">
              <Link to="contacts"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration= {500}>Контакти</Link>
            </li>
          </ul>
        </div>
        <div className="about__img"></div>

      </div>
      <div className="text__about">
        <div className="text__wrapper">
          <div>
            <h1 id="services">Послуги</h1>
            <p>Спальний корпус, лікувальний корпус, бювет хв. вод, їдальня, спортивні та ігрові майданчики, більярд,
              настільний теніс,
              сауна, узд, парковка.</p>
          </div>
          <div>
            <h1 id="recovery">Лікування та оздоровлення</h1>
            <p>Лікувальна база санаторію надає максимальні можливості для оздоровлення, профілактики і відновлення
              організму за
              допомогою широкого комплексу фізіотерапевтичних процедур, що відповідають останнім вимогам медицини.
              Для
              відпочиваючих
              пропонуються наступні види лікувальних процедур: різні ванни, діагностика на апараті УЗД, масаж,
              озокерит,
              фізпроцедури, промивання кишечника, сліпе зондування, водолікування мінеральними водами, у тому числі
              “Нафтусею”,
              консультації уролога, ендокринолога, гастроентеролога та інших спеціалістів високої кваліфікації.
              А також проводимо реабілітацію учаснікив АТО, ООС та революції гідності.
            </p>
          </div>
          <div>
            <h1 id="entertainment">Розваги і спорт</h1>
            <p>Додатково надаються екскурсійні-туристичні подорожі. У зимовий період поблизу
              санаторія функціонує
              гірськолижна траса з підйомником «Буковиця».
              • Пішки — до гірськолижного курорту: 3 км. / 37 хвилин.
              • Машиною — до гірськолижного курорту: 3.8 км / 10 хвилин.</p>
          </div>
          <div>
            <h1 id="live">Проживання</h1>
            Одне і двох кімнатні номери. Є номери: з одним двомісним ліжком, з двома одномісними ліжками і c трьома
            одномісними
            ліжками.
          </div>
          <div>
            <h1 id="food">Харчування</h1>
            <p>Харчування чотириразове, високої якості. Хлібобулочні вироби випікаються безпосередньо в санаторії
              “Джерельный” за
              особливою технологією, а також домашні ковбаси та інші вишукані страви української кухні та дієти.</p>
          </div>
          <div>
            <h1 id="contacts">Контакти та розташування</h1>
            <p>Санаторій “Джерельний” розташований у парково-лісовій зоні 1,5 км від бальнеологічного курорта
              Трускавець в передгір’ї
              Карпат с. Модричі.

              Адреса: Дрогобицький р-н, с.Модричі, вул. Тустановицька 1а. Львівська область, 82186.
              Як доїхати? — поїздом або літаком до м.Львів, далі електропоїздом або автобусом до м.Трускавець (100
              км) або поїздами
              (Київ-Трускавець Дніпро-Трускавець) до м.Трускавець, далі автобусом «Стебник-Борислав» або таксі до
              санаторію.</p>
            <div className="phone__number">
              <a href="tel:+38 (097) 90 42 553">+38 (097) 90 42 553</a>
              <a href="tel:+38 (067) 75 76 844">+38 (067) 75 76 844</a>
              <a href="tel:+38 (066) 73 55 190">+38 (066) 73 55 190</a>
            </div>
          </div>
          <div className="price">
            <h1 id="prices">
              Офіційні ціни на {new Date().getFullYear()} путівки в санаторій «Джерельний» м.Трускавець
            </h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Категорія номера</td>
                  <td>Ціна за чоловіка</td>
                </tr>
                <tr>
                  <td>Стандарт двомісний</td>
                  <td>від 450 грн.</td>
                </tr>
                <tr>
                  <td>Стандарт тримісний</td>
                  <td>від 400 грн.</td>
                </tr>
                <tr>
                  <td>Люкс</td>
                  <td>від 500 грн.</td>
                </tr>
                <tr>
                  <td>Супер Люкс</td>
                  <td>від 550 грн.</td>
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
