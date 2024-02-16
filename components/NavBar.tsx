import Image from 'next/image';
import { GoHomeFill } from "react-icons/go";
import Link from 'next/link'; // Next.js の Link コンポーネントをインポート
import React from 'react';

function NavBar() {
  return (
    <div className='bg-[#f5f5f5] flex flex-col md:flex-row items-center justify-between p-3 px-5 z-99 shadow-sm '>
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
          
        </div>
      </div>
      <div className='flex justify-center md:justify-end items-center gap-3'>
        <button className='text-[10px] mt-2 mb-2 min-w-[110px] bg-transparent hover:bg-emerald-600 text-gray-800 font-semibold hover:text-white py-2 px-8 border border-gray-800 hover:border-transparent rounded-full sm:m-2 hover:border-[1px] cursor-pointer '>
          <Link href="/">HOME</Link>
        </button>
        <button className='text-[10px] mt-2 mb-2 min-w-[110px] bg-transparent hover:bg-emerald-600 text-gray-800 font-semibold hover:text-white py-2 px-8 border border-gray-800 hover:border-transparent rounded-full sm:m-2 hover:border-[1px] cursor-pointer '>
          <Link href="/map">MAP</Link>
        </button>
        <button className='text-[10px] mt-2 mb-2 min-w-[110px] bg-transparent hover:bg-emerald-600 text-gray-800 font-semibold hover:text-white py-2 px-8 border border-gray-800 hover:border-transparent rounded-full sm:m-2 hover:border-[1px] cursor-pointer '>
            <a href="mailto:contact&#64;monreve-sc.co.jp">お問合せ</a>
          </button>
      </div>
    </div>
  )
}

export default NavBar;
