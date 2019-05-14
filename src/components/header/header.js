import React, {Component} from 'react';
import menuItems from './menu-items'
import Menu from '../menu/menu'
import './header.css';

const menuLinks = menuItems.map((link)=>{
  return (
      <Menu key={link.id}
            className={{
              className: null
            }}
            linkPath={link.path}
            linkName={link.name}/>
  )
})

class Header extends Component {

  state = {
    showPhones: false
  }

  showPhonesOnClick = () => {
     this.setState({
       showPhones: !this.state.showPhones
     })
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
        <ul className="menu">
          {menuLinks}
        </ul>
      </header>
    );
  }
}
export default Header;
