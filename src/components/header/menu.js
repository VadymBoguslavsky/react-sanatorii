import React, {Component} from 'react'
import { Link } from "react-scroll";

let menuItems = [
  {
    name: 'Контакти',
    path: 'contacts'
  },
  {
    name: 'Ціни',
    path: 'prices'
  },
  {
    name: 'Про Джерельний',
    path: 'about__san'
  }
]

export default class MenuLinks extends React.Component {
  state = {
    activeButton: null
  }
  render(){
    const menuElements = menuItems.map((link, index) =>
      <li key={index}
          // className={'menu-list--active'}
          onClick = {this.handleClick.bind(this.index)}>
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
  handleClick = (e) => {
    this.setState({
      activeButton: this.state.activeButton === e.target ? null : e.target
    })
    console.log(e)
  }
}
