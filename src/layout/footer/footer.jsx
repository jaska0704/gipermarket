import React from 'react'
import { FooterBottom } from './footer-bottom/footer-bottom'
import { FooterTop } from './footer-top/footer-top'

export const Footer = () => {
  return (
    <div className='container'>
       <FooterTop/>
       <FooterBottom/>
    </div>
  )
}
