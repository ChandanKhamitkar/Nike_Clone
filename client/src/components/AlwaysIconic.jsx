import React, { useState, useEffect } from "react";
import AlwaysIconicInfo from "../liabilities/AlwaysIconicInfo";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper-custom.css';



function AlwaysIconic(){

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000 && window.innerWidth>= 550) {
        setSlidesPerView(2);
      }
      else if(window.innerWidth <= 550){
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // Call on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return (
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={slidesPerView}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex flex-col justify-center items-center my-10 sm:mt-4">

          <div className="">
              {AlwaysIconicInfo.map((card,index) => 
              (
                <SwiperSlide key={index} className="mr-0">
                <div className="w-full max-w-[300px] h-auto sm:max-w-[320px]" >
                  <img src={card.imgLink} alt={card.altName} className="w-full h-auto object-cover" />
                  <p className="font-medium tracking-wide text-gray-500 text-lg text-left mb-10 sm:text-base">{card.altName}</p>
                </div>
              </SwiperSlide>

                )
              )}
          </div>
      </Swiper>
    )
}

export default AlwaysIconic;