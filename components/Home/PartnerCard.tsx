import React, { useEffect, useState } from 'react'
import Image from 'next/image'


function PartnerCard(props:any) {
  const [partner,setPartner]=useState<any>();

  useEffect(()=>{
    if(props.partner)
    {
      setPartner(props.partner)
    }

  },[props.partner])

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

  return partner&&(
    <div className='py-5 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f5f5f5] p-2 sm:p-5 rounded-2xl m-2 sm:m-2
    hover:bg-white 
    hover:border-[1px] cursor-pointer duration-5'>
    <div className="flex">
      <div>
      <button className="relative inline-flex items-center justify-center w-[52px] sm:w-[42px] h-[52px] sm:h-[42px] p-1 mb-1 me-2 overflow-hidden text-[10px] font-medium text-gray-900 rounded-lg group bg-emerald-700 ">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0 whitespace-nowrap">
    {modifyCategoryDropdown(partner.categoryDropdown)}
  </span>
</button>


      </div>
      <div className='truncate'>
        <h2 className='text-[16px] font-bold  truncate'>{partner?.companyName}</h2>
        <h4 className='text-[12px] text-emerald-600 font-midium mb-2 truncate'>{partner.shopName}</h4>
      </div>
    </div>

      
    <Image src={partner?.image?.url}
             alt={partner.companyName}
             width={660}
             height={600}
             className=' 
            mb-3 object-cover py-5' />
        <div className='group-hover:hidden'>
          <div className='flex'>
            <div>
            <button className="relative inline-flex items-center justify-center w-10 h-10 p-0.5 mb-1 me-2 overflow-hidden text-[10px] font-medium text-gray-900 group bg-transparent border-r-4">
  <span className="text-[14px] font-bold relative px-5 py-2.5 transition-all ease-in duration-75 text-gray-800 rounded-md group-hover:bg-opacity-0 whitespace-nowrap">
    特典
  </span>
</button>
            </div>
            <div>
              <h2 className='text-[12px] font-light ml-1'>{partner?.terms}</h2>
              <h2 className='text-[16px] font-bold pb-1 ml-1 text-emerald-600'>{partner?.benefit}</h2>
              {/* <h2 className='line-clamp-5 text-[14px] font-light'>{partner?.notice}</h2> */}
            </div>
          </div>
        </div>
        <button className='hidden group-hover:flex bg-emerald-800 font-bold
    p-3 rounded-lg text-white w-full px-5 justify-between text-[14px] focus:ring-4 focus:outline-none focus:ring-green-200 '
    >
        詳細を見る
    <span className=' bg-emerald-800 font-bold p-1 rounded-md '>
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" fill="currentColor" 
    className="w-4 h-4 text-white">
<path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

    </span></button>
    </div>
  )
}

export default PartnerCard