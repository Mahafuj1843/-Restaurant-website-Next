'use client'

import React, { Fragment } from 'react'
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from './MenuCard';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  };

const Carousel = ({title, setShowPopup}) => {
    const slider = React.useRef(null);

    const settings  = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 830,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <Fragment>
            <div className="mx-4 sm:mx-8 md:mx-22 lg:mx-32 py-6 my-4">
              <div className="flex items-center justify-between">
                <div className='w-fit text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 w-full'>{title}</h1>
                    <div className='separator w-full'></div>
                </div>
                <div className="flex items-center gap-5">
                    <button onClick={() => slider?.current?.slickPrev()}
                        className="p-1.5 sm:p-2 md:p-2.5 rounded-full bg-gray-200 hover:bg-gray-400 transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
                        </svg>
                    </button>
                    <button
                        className="p-1.5 sm:p-2 md:p-2.5 bg-primary text-white rounded-full"
                        onClick={() => slider?.current?.slickNext()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                        </svg>
                    </button>
                </div>
              </div>

                <Slider ref={slider} {...settings} className="overflow-hidden mt-5 relative">
                    <MenuCard setShowPopup={setShowPopup}/>
                    <MenuCard setShowPopup={setShowPopup}/>
                    <MenuCard setShowPopup={setShowPopup}/>
                    <MenuCard setShowPopup={setShowPopup}/>
                    <MenuCard setShowPopup={setShowPopup}/>
                </Slider>
            </div>
        </Fragment>
    )
}

export default Carousel