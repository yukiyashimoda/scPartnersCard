import React, { useState, useRef, useEffect } from 'react';
import InformationModal from '../Information/InformationModal';

function RecommendCard(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<any>();
  const modalRef = useRef<HTMLDivElement>(null); // useRefの型指定

  const openModal = (partner: any) => {
    setSelectedPartner(partner);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className='relative shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f5f5f5] rounded-2xl hover:bg-white hover:border-[1px] cursor-pointer duration-5' style={{ position: 'relative', height: '250px', marginRight: '5px', borderRadius: '10px' }}>
      <div style={{ backgroundImage: `url(${props.partner.image.url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%', borderRadius: '10px' }}></div>
      <div className="absolute inset-0 rounded-2xl"></div>
      <div className="flex-col inset-0 justify-end">
        <div className='p-3'>
          <h2 className='text-[12px] font-semibold text-dark-brown'>{props.partner?.companyName}</h2>
        </div>
        <div className='px-5 pl-3'>
          <button className='p-3 flex bg-emerald-600 font-bold rounded-lg text-white w-full justify-between text-[12px] focus:ring-none focus:outline-none' onClick={() => openModal(props.partner)}>
            詳細を見る
            <span className='bg-transparent font-bold'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div ref={modalRef} className="flex items-center justify-center" >
            <InformationModal partner={selectedPartner} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RecommendCard;
