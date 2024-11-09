import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import './SliderShow.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const SliderReview = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:<IoIosArrowBack />,

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
      <div className="slider-container text-center ">
      <Slider className='' {...settings}>
        
        <div className=' '>
         <img className='' src="Review.png" alt="" />
         <iframe className='' width="550px" height="555px" src="https://www.youtube.com/embed/Rz5WxX8hTN0" title="Fresher&#39;s JavaScript Interview | Selected as Frontend Engineer" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className=''>
        <iframe width="550px" height="555px" src="https://www.youtube.com/embed/Rz5WxX8hTN0" title="Fresher&#39;s JavaScript Interview | Selected as Frontend Engineer" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className=' '>
         <h3><img src="Review.png" alt="" /></h3>
         
        </div>
        <div className=''>
        <iframe className='' width="550px" height="555px" src="https://www.youtube.com/embed/Rz5WxX8hTN0" title="Fresher&#39;s JavaScript Interview | Selected as Frontend Engineer" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Slider>
    </div>
    </>
  )
}

export default SliderReview
