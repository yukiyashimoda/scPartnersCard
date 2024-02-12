import React from 'react';
import RecommendCard from './RecommendCard';
import InformationModal from '../Information/InformationModal';

interface Partner {
  // パートナーカードのデータ構造に合わせたインターフェースを定義してください
  // 例: id: number;
  //     name: string;
  //     category: string;
  //     他に必要なプロパティがあれば追加してください
}

      
interface RecommendListProps {
  partnersList: Partner[];
}

const RecommendList: React.FC<RecommendListProps> = ({ partnersList }) => {
  return (
    
    <div className='flex overflow-x-auto p-5'>
      {partnersList.map((partner, index) => (
        <div key={index} className='flex-none mr-5' style={{ width: '50%', height: '400px'}}>
          <RecommendCard partner={partner} />
        </div>
      ))}
    </div>
  );
}

export default RecommendList;