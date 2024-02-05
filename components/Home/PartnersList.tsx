import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import InformationModal from '../Information/InformationModal';

function PartnersList(props: any) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState<any>([]);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);

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

  const toggleSpeedDial = () => {
    setIsSpeedDialOpen(!isSpeedDialOpen);
  };
  
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
  
    const handleAllButtonClick = () => {
      setCategory(undefined);
    };

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
      
      {isSpeedDialOpen && (
  <div className="speed-dial" style={{ position: 'fixed', bottom: 72, right: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
    {/* Add your menu button components here */}
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('eat'))}>食べる</button>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('drink'))}>飲む</button>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('stay'))}>泊まる</button>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('play'))}>遊ぶ</button>
    <button className="menu-button menu-button bg-carrot text-white rounded-full p-2 shadow-md text-sm" onClick={handleAllButtonClick}>ALL</button>

  </div>
)}

{/* Speed Dial Trigger Button */}
<button
  className="speed-dial-trigger  bg-white text-black rounded-full p-2 shadow-md text-sm"
  onClick={toggleSpeedDial}
  style={{ position: 'fixed', bottom: 16, right: 16 }}
>
  カテゴリー
</button>
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



        </label>
      </div>
    </div>
  );
}

export default PartnersList;
