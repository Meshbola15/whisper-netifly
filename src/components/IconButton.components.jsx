import React from 'react'

const Icon = ({Icon, Link}) => {
  return (
    <a href={Link} className='border-[1px] border-neutral-200 rounded-full p-3 cursor-pointer hover:shadow-lg'>
        {Icon}
    </a>
  )
}

export default Icon