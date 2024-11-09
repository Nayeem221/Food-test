import React from 'react'
import './Popular.css'
import CommonHead from '../Common/CommonHead'
import CommonHead4 from '../Common/CommonHead4'
import SliderShow from '../Common/SliderShow'

const Popular = () => {
  return (
    <>
      <div className="popular relative">
        <div className="container">
            <div className="mainpopular px-[30px] py-[30px] lg:px-0 lg:py-0">
                <div className="populartext lg:relative">
                    <CommonHead commonheadtext={'Crispy, Every Bite Taste'}/>
                     <CommonHead4 commonheadh4text={'POPULAR FOOD ITEMS'}/>
                </div>
                <SliderShow />
            </div>
           
        </div>
        <img className='lg:absolute lg:bottom-[50%] hidden lg:flex' src="lota.png" alt="" />
      </div>
    </>
  )
}

export default Popular
