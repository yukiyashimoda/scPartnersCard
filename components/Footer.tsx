import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-800  items-center 
      justify-between p-10 px-10 z-99'> 
      <div>    
        <span className="block text-[10px] text-gray-300 sm:text-center justyfy-center">© 2024 <a href="" className="hover:underline">SPECIAL CLUB PARTNERS</a>. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer