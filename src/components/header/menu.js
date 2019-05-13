import React, {Component} from 'react'
import { Link } from "react-scroll";

let menuItems = [
  {
    id:1,
    name: 'Контакти',
    path: 'contacts'
  },
  {
    id:2,
    name: 'Ціни',
    path: 'prices'
  },
  {
    id:3,
    name: 'Про Джерельний',
    path: 'about__san'
  }
]

export default class MenuLinks extends React.Component {
  state = {
    activeButton: null
  }
  render(){
    const menuElements = menuItems.map((link) =>
      <li key={link.id}
          className={`${this.state.activeButton === link.id ? 'menu-link--active' : ''}`}
          onClick = {()=>{
            this.setState({
              activeButton: link.id
            })
          }}>
            <Link to={link.path}
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
