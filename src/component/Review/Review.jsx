import React from 'react'
import './Review.css'
import CommonHead from '../Common/CommonHead'
import SliderShow from '../Common/SliderShow'
import SliderReview from '../Common/SliderReview'

const Review = () => {
  return (
    <>
      <div className="review relative">
        <div className="container">
        <div className="">
            <CommonHead commonheadtext={'Crispy, Every Bite Taste'}/>
            <h2 className='font-bebas font-bold text-[62px] text-[#181818] mt-[16px] mb-[60px]'>What Some of my Customers Say</h2>
            
        </div>
        <div className="reviewslider relative">
<SliderReview/>
        </div>
        </div>
        <img className='absolute bottom-[48%] hidden lg:flex' src="Tomato.png" alt="" /> 
        <img className='absolute bottom-[20%] hidden lg:flex right-0' src="12.png" alt="" />
      </div>
    
    </>
  )
}

export default Review
