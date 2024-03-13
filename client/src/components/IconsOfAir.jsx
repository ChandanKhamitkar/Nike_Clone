import React, { useState, useEffect } from "react";
import AirMaxInfo from "../liabilities/AirMaxInfo";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper-custom.css';


function IconsOfAir(){

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
          spaceBetween={10}
          slidesPerView={slidesPerView}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="flex flex-col justify-center items-center my-10 ml-[30px] sm:mt-0">

          
            <div className="">
                {AirMaxInfo.map((card,index) => 
                (
                  <SwiperSlide key={index}>
                    <div className="w-full max-w-[467px] h-auto sm:max-w-[400px]">
                      <img src={card.imgLink} alt={card.altName} className="w-full h-auto object-cover" />
                    </div>
                    <p className="font-normal text-xl text-left mb-10 sm:text-lg">{card.altName}</p>
                  </SwiperSlide>

                  )
                )}
            </div>
        </Swiper>
    )
}
export default IconsOfAir;