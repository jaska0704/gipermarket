import React from 'react'

export const HeaderTop = () => {
  return (
    <div className=' flex justify-end items-center text-base font-jost font-normal leading-[24px] gap-7 mt-3'>
      <p>Доставка и оплата</p>
      <p>Пункты выдачи</p>
      <p>Поддержка</p>
      <a className='flex' href="tel:+998 90 253 77 53"><img src="/icons/tel-icon.svg" alt="icon" /> +998 90 253 77 53</a>
    </div>
  );
}
