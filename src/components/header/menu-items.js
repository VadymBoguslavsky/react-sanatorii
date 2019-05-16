import React, {Component} from 'react'
import Menu from '../menu/menu'
import i18n from 'i18next'

const menuItems = [
  {
    id:1,
    name: 'Контакtи',
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
      const linkName = {
        name: i18n.t(`header.${link.path}`)
      }
      return (
          <Menu key={link.id}
                className={this.state.isActive === link.id ? 'menu-list' : ''}
                onClick = {()=>{
                  this.setState({
                    isActive: link.id
                  })
                }}
                linkPath={link.path}
                linkName={linkName.name}/>
      )
    })
    return menuLinks
  }
}


export default MenuLinks;
