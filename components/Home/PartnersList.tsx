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
  const [selectedPartner, setSelectedPartner] = useState<any>(null); // 初期値をnullに設定
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
    setSelectedPartner(null); // ポップアップを閉じる際にselectedPartnerをnullに設定
  };

  const filteredPartnersList = category
    ? props.partnersList.filter((partner: any) => partner.categoryDropDown2 === category)
    : props.partnersList;

  const toggleSpeedDial = () => {
    setIsSpeedDialOpen(!isSpeedDialOpen);
  };

  return (
    <div>
      {/* FiltersOption コンポーネント */}
      <FiltersOption partnersList={props.partnersList} setCategory={setCategory} />

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 mb-[100px] p-5'>
        {!isLoaded &&
          filteredPartnersList.map((partner: any, index: number) => (
            <div key={index} onClick={() => openModal(partner)}>
              <PartnerCard partner={partner} />
            </div>
          ))}

        {/* ポップアップ */}
        <dialog id="my_modal_4" className="modal" onClick={closeModal}>
          {selectedPartner && <InformationModal partner={selectedPartner} />} {/* nullチェック */}
        </dialog>
      </div>

      {/* スピードダイアルメニュー */}
      {isSpeedDialOpen && (
        <div className="speed-dial" style={{ position: 'fixed', bottom: 72, right: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* メニューボタン */}
          {/* メニューボタン */}
          {/* メニューボタン */}
          {/* メニューボタン */}
          {/* メニューボタン */}
          {/* メニューボタン */}
          {/* メニューボタン */}
          {/* メニューボタン */}
          {/* メニューボタン */}
          <button className="menu-button menu-button bg-carrot text-white rounded-full p-2 shadow-md text-sm" onClick={toggleSpeedDial}>ALL</button>
        </div>
      )}

      {/* スピードダイアルトリガーボタン */}
      <button className="speed-dial-trigger bg-carrot text-white rounded-full p-2 shadow-md text-sm" onClick={toggleSpeedDial} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <TbCategoryFilled size={30} />
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
