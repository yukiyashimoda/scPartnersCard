import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const modifyCategoryDropdown = (originalCategory: string) => {
  // カテゴリによって日本語に変換する
  switch (originalCategory) {
    case 'eat':
      return '食べる';
    case 'drink':
      return '飲む';
    case 'play':
      return '遊ぶ';
    case 'stay':
      return '泊まる';
    
    default:
      return originalCategory;
  }
};

function InformationModal({partner}:any) {
  
  return (
    <div className="modal-box w-95% max-w-2xl bg-white">
      <div className='grid grid-cols-1 p-[5px]'>
        <div className="">
          <div className='flex'>
           <div>
           <button className="relative inline-flex items-center justify-center w-[52px] sm:w-[42px] h-[52px] sm:h-[42px]  p-1 mb-1 me-2 overflow-hidden text-[10px] font-medium text-gray-900 rounded-lg group bg-emerald-700 ">
           <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0 whitespace-nowrap">
           {modifyCategoryDropdown(partner.categoryDropdown)}
           </span>
           </button>

           </div>
           <div className='truncate'>
            <h2 className='text-[24px] sm:text-[14px] font-bold  truncate'>{partner?.companyName}</h2>
            <h4 className='text-[18px] sm:text-[10px] text-emerald-600 font-midium mb-2 truncate'>{partner.shopName}</h4>
           </div>
          </div>
          <div>
            <Image src={partner?.image?.url}
             alt={partner.companyName}
             width={660}
             height={600}
             className=' 
            mb-3 object-cover py-5' />
          <div className='flex gap-2 pb-5'>
            <button type="button"
             className="flex flex-col items-center text-white bg-gray-600 hover:bg-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex-grow"
             onClick={() => window.location.href = partner?.googleMap}>
              <img className="h-4 w-4 mb-1" src="../map-pin.svg" alt="" />
              MAP
            </button>

            <button type="button"
             className="flex flex-col items-center text-white bg-gray-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex-grow"
             onClick={() => window.location.href = partner?.webSite}>
              <img className="h-4 w-4 mb-1" src="../web-link.svg" alt="" />
              WEB
            </button>

            <button type="button"
             className="flex flex-col items-center text-white bg-gray-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex-grow"
             onClick={() => window.location.href = `tel:${partner?.telNumber}`}>
             <img className="h-4 w-4 mb-1" src="../phone.svg" alt="" />
             TEL
            </button>
          </div>
          
          <div>
            <h2 className=' text-[18px] font-light pb-5'>{partner?.introduction}</h2>
          </div>

          <div className='flex h-100 mb-5 '>
            <div>
               <button className="relative inline-flex items-center  w-15 h-15 p-5 mb-0 me-2 overflow-hidden text-[15px] font-medium text-gray-900 rounded-lg bg-emerald-600 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0 whitespace-nowrap">
            特典
            </span>
            </button>
            </div>
            <div>
              <h2 className='text-[18px] font-light ml-1'>{partner?.terms}</h2>
              <h2 className='text-[24px] font-bold pb-0 ml-1 text-emerald-600'>{partner?.benefit}</h2>
              <h2 className='line-clamp-5 text-[14px] font-light'>{partner?.notice}</h2>
            </div>
          </div>
          <div className='flex h-100 mt-4 mb-4 border-t border-b border-gray-300  '>
            <div className='mt-8 mb-8'>
            <img className="h-8 w-8" src="../map-pin-gray.svg" alt="" />
            </div>
            <div>
              <h2 className='text-[18px] font-light ml-3 mt-5'>〒{partner?.postNumber}</h2>
              <h2 className='text-[18px] font-light pb-0 ml-3 mb-1 text-black'>{partner?.address}</h2>
            </div>
          </div>
          <div className='flex h-100 mb-4 border-b border-gray-300  '>
            <div className='mt-8 mb-8'>
            <img className="h-8 w-8" src="../time.svg" alt="" />
            </div>
            <div>
              <h2 className='text-[18px] font-light ml-3 mt-5'>営業時間:{partner?.businessTime}</h2>
              <h2 className='text-[18px] font-light pb-0 ml-3 mb-5 text-black'>{partner?.holiday}</h2>
            </div>
          </div>
          <div className="modal-action">
             <form method="dialog">
             <button className="btn">Close</button>
             </form>
          </div>
        </div>
        </div>
        <div>
          
        </div>
    </div>
    </div>
  )
}

export default InformationModal