import React, {Component} from 'react';
import { Link } from "react-scroll";

import './header.css';

class Header extends Component {

  state = {
    showPhones: false
  }

  showPhonesOnClick = () => {
     this.setState({
       showPhones: !this.state.showPhones
     })
   }
   toggleClass = (e)=> {
          let main = document.querySelectorAll('.menu li a');
          for(let i = 0; i<main.length; i++){
            let all = main[i];
            all.className = ''
            all.scrollIntoView({behavior: "smooth"})
      };
      e.target.className = 'menu-list--active'
    }

render(){
      return (
        <header className="header">
          <div className="call_us" onClick={this.showPhonesOnClick}>
            {this.state.showPhones ?
              <div id="myDIV">
                <div className="phone__number">
                  <a href="tel:+38 (097) 90 42 553">+38 (097) 90 42 553</a>
                  <a href="tel:+38 (095) 90 30 126">+38 (095) 90 30 126</a>
                  <a href="tel:+38 (066) 73 55 190">+38 (066) 73 55 190</a>
                  <a href="tel:+38 (067) 75 76 844">+38 (067) 75 76 844</a>
                  <a href="tel:(032) 47 59 805">(032) 47 59 805</a>
                </div>
              </div> : ''}
        </div>
        <div className="logo"><a href="./">«Джерельний»</a></div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu" onClick={this.activeMenuLinks}>
          <li>
            <Link to="contacts"
                  className='menu-list--active'
                  onClick={this.toggleClass}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}>Контакти</Link>
          </li>
          <li>
            <Link to="prices"
               onClick={this.toggleClass}
               spy={true}
               smooth={true}
               offset={-70}
               duration= {500}>Ціни</Link>
          </li>
          <li>
            <Link to="about__san"
               onClick={this.toggleClass}
               spy={true}
               smooth={true}
               offset={-70}
               duration= {500}>Про Джерельний</Link>
          </li>
        </ul>
      </header>
    );
  }
}
export default Header;
