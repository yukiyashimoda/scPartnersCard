import React from 'react';
import RecommendCard from './RecommendCard';

interface Partner {
  id: number;
  name: string;
  category: string;
  recommend: boolean; 
}
      
interface RecommendListProps {
  partnersList: Partner[];
}

const RecommendList: React.FC<RecommendListProps> = ({ partnersList }) => {
  const recommendedPartners = partnersList.filter(partner => partner.recommend);

  return (
    <div className='flex overflow-x-auto p-5'>
      {recommendedPartners.map((partner, index) => (
        <div key={index} className='flex-none mr-3' style={{ width: '45%', height: '400px'}}>
          <RecommendCard partner={partner} />
        </div>
      ))}
    </div>
  );
}

export default RecommendList;
