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
        <div key={index} className='flex-none ml-3'>
          <RecommendCard partner={partner} />
        </div>
      ))}
      
      <style jsx>{`
        @media screen and (max-width: 640px) { /* スマートフォン */
          .flex-none {
            width: 60%;
            height: 400px;
          }
        }

        @media screen and (min-width: 641px) and (max-width: 1024px) { /* タブレット */
          .flex-none {
            width: 45%;
            height: 400px;
          }
        }

        @media screen and (min-width: 1025px) { /* Web */
          .flex-none {
            width: 30%;
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
}

export default RecommendList;
