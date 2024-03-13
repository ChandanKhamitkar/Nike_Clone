import React, { useState, useEffect } from "react";
import ButtonAbsolute from "./Buttons/ButtonAbsolute";
import FeaturedInfo from "../liabilities/FeaturedInfo";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper-custom.css';


function Featured(){
    
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
        
        
                {/* {FeaturedInfo.map((card, index) => <FeaturedCard key={index} imgLink={card.imgLink} title={card.title} /> )} */}
        <div className="">
                {FeaturedInfo.map((card, index) => 

             <SwiperSlide key={index}>
                    <div className="w-full max-w-[467px] h-auto flex flex-col justify-center items-center space-y-4 relative" style={{backgroundImage : `url(${card.imgLink})`, backgroundSize : "cover", backgroundPosition: "center"}}>
                        <div className="w-full h-full">
                            <img src={card.imgLink} alt={card.title} className="w-full h-auto object-cover" />
                        </div>
                        <div className="flex flex-col justify-start space-y-4 absolute bottom-8 left-8 sm:bottom-4 sm:left-4 sm:space-y-2">
                            <p className="font-medium text-xl text-white sm:text-base">{card.title}</p>
                            <ButtonAbsolute color="white" text="Shop" txtColor="black" />
                        </div>
                    </div>
                    </SwiperSlide>
                )}
        </div>
    </Swiper>
    
    )
}

export default Featured;