import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640); // 640px 以下をスマートフォンとして扱う
    }

    window.addEventListener('resize', handleResize);

    // 初回レンダリング時のリサイズイベントの発火
    handleResize();

    // クリーンアップ関数を追加
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} p-5 sm:px-10 md:px-10 gap-5 w-full`}>
      <a href="https://specialclub-sc.com" className={`w-full ${isMobile ? 'sm:w-full' : 'sm:w-1/2'}`}>
        <div className="cursor-pointer flex w-full relative rounded-lg overflow-hidden">
          <Image
            src="/sclounge.jpg"
            alt="Special Club"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className="text-[14px] absolute bottom-0 left-0 text-white p-2">SPECIAL CLUB OFFICIAL SITE →</p>
        </div>
      </a>
      <a href="https://specialclubonline.myshopify.com" className={`w-full ${isMobile ? 'sm:w-full' : 'sm:w-1/2'}`}>
        <div className="cursor-pointer flex w-full relative rounded-lg overflow-hidden">
          <Image
            src="/sdchampagne.jpg"
            alt="Special Club"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className="text-[14px] absolute bottom-0 left-0 text-white p-2">SPECIAL CLUB ONLINE STORE →</p>
        </div>
      </a>
    </div>
  );
}

export default Hero;
