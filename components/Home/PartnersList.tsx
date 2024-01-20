import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import InformationModal from '../Information/InformationModal';

function PartnersList(props: any) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState<any>([]);
  const [category, setCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (props.partnersList) {
      setIsLoaded(false);
    }
  }, [props.partnersList]);

  const openModal = (partner: any) => {
    (window as any).my_modal_4.showModal();
    setSelectedPartner(partner);
  };

  const filteredPartnersList = category
    ? props.partnersList.filter((partner: any) => partner.categoryDropdown === category)
    : props.partnersList;

  return (
    <div>
      <FiltersOption partnersList={props.partnersList} setCategory={setCategory} />

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 mb-[100px]'>
        {!isLoaded &&
          filteredPartnersList.map((partner: any, index: number) => (
            <div key={index} onClick={() => openModal(partner)}>
              <PartnerCard partner={partner} />
            </div>
          ))}

        <dialog id="my_modal_4" className="modal">
          <InformationModal partner={selectedPartner} />
        </dialog>
      </div>
    </div>
  );
}

function FiltersOption({ partnersList, setCategory }: any) {
  const [categoryList, setCategoryList] = useState<any>();

  useEffect(() => {
    if (partnersList) {
      filterPartnerList();
    }
  }, [partnersList]);

  const getCategoryName = (categoryDropdown: string) => {
    switch (categoryDropdown) {
      case 'eat':
        return '食べる';
      case 'drink':
        return '飲む';
      case 'stay':
        return '泊まる';
      case 'play':
        return '遊ぶ';
      default:
        return categoryDropdown;
    }
  };

  const getDropdownValue = (displayedCategory: string) => {
    switch (displayedCategory) {
      case '食べる':
        return 'eat';
      case '飲む':
        return 'drink';
      case '泊まる':
        return 'stay';
      case '遊ぶ':
        return 'play';
      default:
        return displayedCategory;
    }
  };

  const filterPartnerList = () => {
    const categories = partnersList.map((element: any) =>
      getCategoryName(element.categoryDropdown)
    );
    setCategoryList(categories);
  };

  const handleAllButtonClick = () => {
    setCategory(undefined);
  };

  return (
    <div className='mt-10 items-center pl-2'>
      <div>
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text font-bold text-gray-700 text-[14px]'>カテゴリー</span>
          </div>

          <div className="flex flex-wrap">
  <button className="text-[12px] mx-2 mt-3 min-w-[80px] bg-transparent hover:bg-dark-brown text-dark-brown font-semibold hover:text-white py-2 px-4 border border-dark-brown hover:border-transparent rounded-full mb-2 md:mb-0 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f2f2f2] m-2 sm:m-2 
    hover:border-[1px] cursor-pointer duration-5" onClick={handleAllButtonClick}>
    ALL
  </button>
  {categoryList &&
    categoryList.map((category: string, index: number) => (
      <button
        key={index}
        className="text-[12px] mx-2 mt-3 min-w-[80px] bg-transparent hover:bg-carrot text-dark-brown font-semibold hover:text-white py-2 px-4 border border-dark-brown hover:border-transparent rounded-full mb-2 md:mb-0 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f2f2f2] m-2 sm:m-2 
        hover:border-[1px] cursor-pointer duration-5"
        onClick={() => setCategory(getDropdownValue(category))}
      >
        {category}
      </button>
      
    ))}
</div>


<div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 ">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button data-tooltip-target="tooltip-home" type="button" className="text-black text-[12px] inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-dark-brown hover:text-white group"onClick={() => setCategory(getDropdownValue('eat'))}
            >
              食べる
        </button>
        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-brown rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            食べる
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-wallet" type="button" className="text-black text-[12px] inline-flex flex-col items-center justify-center px-5 hover:bg-dark-brown hover:text-white group"onClick={() => setCategory(getDropdownValue('drink'))}
            >
              飲む
        </button>
        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            飲む
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className="flex items-center justify-center">
            <button data-tooltip-target="tooltip-new" type="button" className="bg-dark-brown text-white text-[12px] inline-flex flex-col items-center justify-center px-5 hover:bg-carrot group rounded-full"onClick={handleAllButtonClick}>
    ALL
            </button>
        </div>
        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            ALL
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" className="text-black text-[12px] inline-flex flex-col items-center justify-center px-5 hover:bg-dark-brown hover:text-white group"onClick={() => setCategory(getDropdownValue('stay'))}
            >
              泊まる
        </button>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            泊まる
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-profile" type="button" className="text-black text-[12px] inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-dark-brown hover:text-white group"onClick={() => setCategory(getDropdownValue('play'))}
            >
              遊ぶ
        </button>
        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            遊ぶ
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>


        </label>
      </div>
    </div>
  );
}

export default PartnersList;
