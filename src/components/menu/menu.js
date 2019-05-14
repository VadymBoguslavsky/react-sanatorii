import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class Menu extends Component {

  render(){
    const {menuArray, className} = this.props
    const menuElements = menuArray.map((link, index) =>
      <li key={index}
          className={className.classname}>
        <Link to={link.path}
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}>
          {link.name}
        </Link>
      </li>
    )
    return (
      <ul>
        {menuElements}
      </ul>
    )
  }
}
