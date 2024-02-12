import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import InformationModal from '../Information/InformationModal';
import { TbCategoryFilled } from "react-icons/tb";
import { MdRestaurant, MdBusinessCenter, MdNightlife, MdOtherHouses } from "react-icons/md";
import { FaHandHoldingHeart, FaSnowman } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";

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

  const closeModal = () => {
    (window as any).my_modal_4.close();
    setSelectedPartner(null); 
  };

  const filteredPartnersList = category
    ? props.partnersList.filter((partner: any) => partner.categoryDropDown2 === category)
    : props.partnersList;

  const toggleSpeedDial = () => {
    setIsSpeedDialOpen(!isSpeedDialOpen);
  };



  
    const getCategoryName = (categoryDropDown2: string) => {
      switch (categoryDropDown2) {
        case 'eat':
          return '食品/飲食';
        case 'sale':
          return '販売/サービス';
        case 'life':
          return '暮らし/ライフスタイル';
        case 'health':
          return '医療/美容/健康';
        case 'business':
          return 'ビジネス全般';
        case 'hobby':
          return '趣味/娯楽';
        case 'night':
          return 'ナイトレジャー';
        case 'other':
          return 'その他';
        default:
          return categoryDropDown2;
      }
    };
  
    const getDropdownValue = (displayedCategory: string) => {
      switch (displayedCategory) {
        case '食品/飲食':
          return 'eat';
        case '販売/サービス':
          return 'sale';
        case '暮らし/ライフスタイル':
          return 'life';
          case '医療/美容/健康':
            return 'health';
          case 'ビジネス全般':
            return 'business';
          case '趣味/娯楽':
            return 'hobby';
          case 'ナイトレジャー':
            return 'night';
          case 'その他':
            return 'other';
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

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 mb-[100px] p-5'>
        {!isLoaded &&
          filteredPartnersList.map((partner: any, index: number) => (
            <div key={index} onClick={() => openModal(partner)}>
              <PartnerCard partner={partner} />
            </div>
          ))}

        <dialog id="my_modal_4" className="modal" onClick={closeModal}>
          {selectedPartner && <InformationModal partner={selectedPartner} />}
        </dialog>
      </div>
    
      {isSpeedDialOpen && (
  <div className="speed-dial" style={{ position: 'fixed', bottom: 72, right: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
    {/* Add your menu button components here */}
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap  bg-gray-100 text-carrot mr-3">
      <span>食品/飲食</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('eat'))} title="食品/飲食"><MdRestaurant size={30}  /></button>
    </div>
    </div>
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap  bg-gray-100 text-carrot mr-3">
      <span>販売/サービス</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('sale'))}><FaCartShopping size={30}/></button>
    </div>
    </div>
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap  bg-gray-100 text-carrot mr-3">
      <span>暮らし/ライフスタイル</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('life'))}><FaHandHoldingHeart size={30}/></button>
    </div>
    </div>
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap  bg-gray-100 text-carrot mr-3">
      <span>医療/美容/健康</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('health'))}><RiMentalHealthFill  size={30}/></button>
    </div>
    </div>
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap  bg-gray-100 text-carrot mr-3">
      <span>ビジネス全般</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('business'))}><MdBusinessCenter size={30}/></button>
    </div>
    </div>
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap bg-gray-100 text-carrot mr-3">
      <span>趣味/娯楽</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('hobby'))}><FaSnowman size={30}/></button>
    </div>
    </div>
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap bg-gray-100 text-carrot mr-3">
      <span>ナイトレジャー</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('night'))}><MdNightlife size={30}/></button>
    </div>
    </div>
    <div className="flex justify-end">
    <div className="text-[14px] font-bold relative px-3 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 whitespace-nowrap bg-gray-100 text-carrot mr-3">
      <span>その他</span>
    </div>
    <div>
    <button className="menu-button menu-button bg-white text-black rounded-full p-2 shadow-md text-sm" onClick={() => setCategory(getDropdownValue('other'))}><MdOtherHouses size={30}/></button>
    </div>
    </div>
    <button className="menu-button menu-button bg-carrot text-white rounded-full p-2 shadow-md text-sm" onClick={handleAllButtonClick}>ALL</button>

  </div>
)}

{/* Speed Dial Trigger Button */}
<button
  className="speed-dial-trigger  bg-carrot text-white rounded-full p-2 shadow-md text-sm"
  onClick={toggleSpeedDial}
  style={{ position: 'fixed', bottom: 16, right: 16 }}
>
<TbCategoryFilled size={30}/>
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

  const getCategoryName = (categoryDropDown2: string) => {
    switch (categoryDropDown2) {
      case 'eat':
        return '食品/飲食';
      case 'sale':
        return '販売/サービス';
      case 'life':
        return '暮らし/ライフスタイル';
      case 'health':
        return '医療/美容/健康';
      case 'business':
        return 'ビジネス全般';
      case 'hobby':
        return '趣味/娯楽';
      case 'night':
        return 'ナイトレジャー';
      case 'other':
        return 'その他';
      default:
        return categoryDropDown2;
    }
  };

  const getDropdownValue = (displayedCategory: string) => {
    switch (displayedCategory) {
      case '食品/飲食':
        return 'eat';
      case '販売/サービス':
        return 'sale';
      case '暮らし/ライフスタイル':
        return 'life';
        case '医療/美容/健康':
          return 'health';
        case 'ビジネス全般':
          return 'business';
        case '趣味/娯楽':
          return 'hobby';
        case 'ナイトレジャー':
          return 'night';
        case 'その他':
          return 'other';
      default:
        return displayedCategory;
    }
  };

  

  const filterPartnerList = () => {
    const categories = partnersList.map((element: any) => getCategoryName(element.categoryDropDown2));
    // 重複を除外したカテゴリーのリストを作成
    const uniqueCategories = Array.from(new Set(categories));
    setCategoryList(uniqueCategories);
  };


  const handleAllButtonClick = () => {
    setCategory(undefined);
  };

  // カテゴリーをドロップダウンメニューに変更したコード
return (
  <div className='mt-30 items-center pl-2'>
  <div>
    <label className='form-control w-full'>
      <div className='label'>
        <span className='label-text font-bold text-gray-700 text-[14px]'>カテゴリー</span>
      </div>
      <select
        className="py-10 bg-white p-10 sm:p-5 rounded-2xl m-2 sm:m-2
        hover:bg-white h-[3rem]
        border-[1px] border-black
        hover:border-black cursor-pointer duration-5 text-[16px] text-black
        focus:outline-none"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">ALL</option>
        {categoryList &&
          categoryList.map((category: string, index: number) => (
            <option key={index} value={getDropdownValue(category)}>
              {category}
            </option>
          ))}
      </select>
    </label>
  </div>
</div>
  );
}

export default PartnersList;
