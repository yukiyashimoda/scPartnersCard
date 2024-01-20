import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center 
    justify-center p-3 px-5 shadow-sm border-b-[1px]'>
      <div className='flex items-center gap-5'>
      <Image src='/SClogo.svg'
      alt='logo'
      width={60}
      height={100}
      />
    </div>
    </div>
  )
}

export default NavBar