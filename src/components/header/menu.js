import React, {Component} from 'react'
import { Link } from "react-scroll";
import menuItems from './menu-items'
import './header.css';

export default class MenuLinks extends Component {
  state = {
    activeButton: null
  }
  render(){
    const menuElements = menuItems.map((link) =>
      <li key={link.id}>
            <Link to={link.path}
              className={this.state.activeButton === link.id ? 'menu-list' : ''}
              onClick = {()=>{
                this.setState({
                  activeButton: link.id
                })
              }}
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}>{link.name}</Link>
      </li>
    )

    return (
      <ul className="menu">
        {menuElements}
      </ul>
    )
  }
}
