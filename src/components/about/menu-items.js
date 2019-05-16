import React , { Component }from 'react';
import Menu from '../menu/menu'
import i18n from 'i18next'

const menuItems = [
    {
      id:10,
      name: 'Послуги',
      path: 'services'
    },
    {
      id:20,
      name: 'Лікування та оздоровлення',
      path: 'recovery'
    },
    {
      id:30,
      name: 'Розваги і спорт',
      path: 'entertainment'
    },
    {
      id:40,
      name: 'Проживання',
      path: 'live'
    },
    {
      id:50,
      name: 'Харчування',
      path: 'food'
    },
    {
      id:60,
      name: 'Контакти',
      path: 'contacts'
    }
  ]

class MenuLinks extends Component {
  render(){
    const menuLinks = menuItems.map((link)=>{
      const linkName = {
        name: i18n.t(`menu.${link.path}`)
      }
      return (
          <Menu key={link.id}
                className='decor'
                linkPath={link.path}
                linkName={linkName.name}/>
      )
    })
    return menuLinks
  }
}
export default MenuLinks;
