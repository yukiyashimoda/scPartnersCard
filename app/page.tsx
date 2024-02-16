"use client";
import React from 'react';
import Hero from '@/components/Home/Hero';
import Image from 'next/image';
import { getPartnersList } from "@/services";
import { useEffect, useState } from 'react';
import PartnersList from '@/components/Home/PartnersList';
import RecommendList from '@/components/Home/RecommendList';
import BackToTopButton from '@/components/BackToTopButton'; 

export default function Home() {
  const [partnersList, setPartnersList] = useState<any>([]);
  const [partnersOrgList, setPartnersOrgList] = useState<any>([]);

  useEffect(() => {
    getPartnerList_();
  }, []);

  const getPartnerList_ = async () => {
    const result: any = await getPartnersList();
    setPartnersList(result?.partnerLists);
    setPartnersOrgList(result?.partnerLists);
  }

  const filterPartnerList = (category: string) => {
    const filterList = partnersOrgList.filter((item: any) =>
      item.categoryDropdown == category
    );
    setPartnersList(filterList);
  };

  return (
    <div className=''>
      <Hero />
      <div>
        <h2 className='flex text-[18px] md:text-[16px] sm:-[14px] ml-3 font-800 tracking-widest pl-[3%]'>
          <span className='special-font'>Recommend →</span>
        </h2>
      </div>
      <RecommendList partnersList={partnersList} />
      <PartnersList partnersList={partnersList} />
      <BackToTopButton />
    </div>
  );
}
