import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class Menu extends Component {

  render(){
    const { className =  "", onClick, linkPath, linkName} = this.props
    return (
        <li>
          <Link to={linkPath}
            className = {className}
            onClick={onClick}
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
