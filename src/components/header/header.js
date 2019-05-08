import React from 'react';

import './header.css';

const Header = () => {
    const myFunction = () => {
      var x = document.getElementById("myDIV");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    return (
      <header className="header">
      <div className="call_us" onClick={myFunction}>
        <div id="myDIV">
          <div className="phone__number">
            <a href="tel:+38 (097) 90 42 553">+38 (097) 90 42 553</a>
            <a href="tel:+38 (095) 90 30 126">+38 (095) 90 30 126</a>
            <a href="tel:+38 (066) 73 55 190">+38 (066) 73 55 190</a>
            <a href="tel:+38 (067) 75 76 844">+38 (067) 75 76 844</a>
            <a href="tel:(032) 47 59 805">(032) 47 59 805</a>
          </div>
        </div>
      </div>
      <div className="logo"><a href="#">«Джерельний»</a></div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="#contacts">Контакти</a></li>
        <li><a href="#prices">Ціни</a></li>
        <li><a href="#about__san">Про Джерельний</a></li>
        <li><a href="#">Галерея</a></li>
      </ul>
    </header>
  );
}

export default Header;
