import React from 'react'
import { HeaderTop } from './header-top/header-top'
import { HeaderBottom } from './header-bottom/header-bottom'


export const Header = () => {
  return (
    <div className='container'>
        <HeaderTop/>
        <HeaderBottom/>
    </div>
  )
}
