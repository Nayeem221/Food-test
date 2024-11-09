import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import './SliderShow.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const SliderShow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<IoIosArrowBack />,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000,  // Change slide every 2 seconds
     prevArrow: <IoIosArrowForward />,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ] 
  };
  return (
    <>
      <div className="slider-container text-center">
      <Slider {...settings}>
        <div>
          <h3><img src="Burger.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="sacealpizza.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="Frame 1707477990.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="last.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="Frame 1707477990.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="sacealpizza.png" alt="" /></h3>
        </div>
      </Slider>
    </div>
    </>
  )
}

export default SliderShow
