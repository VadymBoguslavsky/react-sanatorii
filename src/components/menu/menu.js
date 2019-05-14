import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class Menu extends Component {

  render(){
    const { className, linkPath, linkName} = this.props
    return (
        <li className = {className.className}>
          <Link to={linkPath}
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            {linkName}
          </Link>
        </li>
    )
  }
}
