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

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10'>
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

          <div className="">
          <div className="flex overflow-x-auto">
  <button className="text-[12px] mx-2 mt-3 w-[120px] bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-full mb-2 md:mb-0" onClick={handleAllButtonClick}>
    ALL
  </button>
  {categoryList &&
    categoryList.map((category: string, index: number) => (
      <button
        key={index}
        className="text-[12px] mx-2 mt-3 w-[120px] bg-transparent hover:bg-emerald-600 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-full mb-2 md:mb-0"
        onClick={() => setCategory(getDropdownValue(category))}
      >
        {category}
      </button>
    ))}
</div>
</div>

        </label>
      </div>
    </div>
  );
}

export default PartnersList;
