import React from 'react'
import { cn } from '../../lib/utils'

const Logos = ({title, image, otherClass}) => {
  return (
    <div
      className='flex flex-col items-center gap-[11px]'
    >
      <img className={cn('w-[75%] lg:w-full', otherClass)} src={image} alt="" />
      <h5 className='text-lg md:text-2xl font-medium'>{title}</h5>
    </div>
  )
}

export default Logos