import React, {Component} from 'react'
import Menu from '../menu/menu'

const menuItems = [
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

class MenuLinks extends Component {
  state = {
    isActive: null
  }
  render(){
    const menuLinks = menuItems.map((link)=>{
      return (
          <Menu key={link.id}
                className={this.state.isActive === link.id ? 'menu-list' : ''}
                onClick = {()=>{
                  this.setState({
                    isActive: link.id
                  })
                }}
                linkPath={link.path}
                linkName={link.name}/>
      )
    })
    return menuLinks
  }
}


export default MenuLinks;
