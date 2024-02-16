import Image from 'next/image'
import { GoHomeFill } from "react-icons/go";
import Link from 'next/link' // Next.js の Link コンポーネントをインポート
import React from 'react'

function NavBar() {
  return (
    <div className='bg-transparent flex flex-col md:flex-row items-center justify-between p-3 px-5 z-99'>
      <div className='flex items-center gap-5 pl-[3%] p-1 justify-between w-full'>
        <div className='flex items-center gap-5 '>
          <Image src='/SClogo.svg' alt='logo' width={50} height={70} />
          <div>
            <h2 className='text-[14px] md:text-[12px] sm:-[10px] ml-1 font-400 tracking-widest text-emerald-600'>
              <span className='special-font'>SPECIALCLUB</span>
            </h2>
            <h2 className='text-[14px] md:text-[12px] sm:-[10px] ml-1 font-800 tracking-widest'>
              <span className='special-font'>PARTNERS</span>
            </h2>
          </div>
        </div>
        <div className='flex items-center'>
          <button className='text-[10px] mt-2 mb-2 w-30 bg-gray-800 hover:bg-emerald-600 text-white font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-full sm:m-2 hover:border-[1px] cursor-pointer duration-5'>
            <a href="mailto:contact&#64;monreve-sc.co.jp">お問合せ</a>
          </button>
        </div>
      </div>
      <div className='flex justify-center md:justify-end items-center gap-5'>
        <button className='text-[10px] mt-2 mb-2 w-50 bg-transparent hover:bg-emerald-600 text-gray-800 font-semibold hover:text-white py-2 px-8 border border-gray-800 hover:border-transparent rounded-full sm:m-2 hover:border-[1px] cursor-pointer duration-5'>
          <Link href="/">HOME</Link>
        </button>
        <button className='text-[10px] mt-2 mb-2 w-50 bg-transparent hover:bg-emerald-600 text-gray-800 font-semibold hover:text-white py-2 px-8 border border-gray-800 hover:border-transparent rounded-full sm:m-2 hover:border-[1px] cursor-pointer duration-5'>
          <Link href="/map">MAP</Link>
        </button>
      </div>
    </div>
  )
}

export default NavBar
