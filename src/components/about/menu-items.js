import React from 'react';
import Menu from '../menu/menu'

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
  const menuLinks = menuItems.map((link)=>{
    return (
        <Menu key={link.id}
              className='decor'
              linkPath={link.path}
              linkName={link.name}/>
    )
  })
export default menuLinks;
