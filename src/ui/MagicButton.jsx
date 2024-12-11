import React from 'react'

const MagicButton = ({
        title,
        icon,
        position,
        handleClick,
        otherClasses
    }) => {
  return (
    <button
        onClick={handleClick}
        className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-blue px-7 text-1xl sm:text-2xl font-light text-white backdrop-blur-3xl gap-3 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton