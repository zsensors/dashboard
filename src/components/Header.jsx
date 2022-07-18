import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mt-14 md:mt-0 mb-5 md:mb-10'>
        <p className='text-gray-400'>
          {category}
        </p>
        <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header