import React, { useEffect, useState } from 'react';

function RecommendCard(props: any) {
  const [partner, setPartner] = useState<any>();

  useEffect(() => {
    if (props.partner) {
      setPartner(props.partner)
    }
  }, [props.partner])

  return partner && (
    <div className='relative shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f5f5f5] rounded-2xl hover:bg-white hover:border-[1px] cursor-pointer duration-5' style={{ position: 'relative', height: '250px', marginRight: '5px', borderRadius: '10px' }}>
      <div style={{ backgroundImage: `url(${partner.image.url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%', borderRadius: '10px' }}></div>
      <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
        <div className="flex-col inset-0 justify-end">
          <div className='p-3'>
            <h2 className='text-[14px] font-bold text-dark-brown'>{partner?.companyName}</h2>
          </div>
          <div className='px-5 pl-3'>
            <button className='p-3 flex bg-emerald-600 font-bold rounded-lg text-white w-full justify-between text-[12px] focus:ring-none focus:outline-none'>
            詳細を見る
              <span className='bg-transparent font-bold'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default RecommendCard;
