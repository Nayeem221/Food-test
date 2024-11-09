import React from 'react'
import './Pizza.css'
import { Link } from 'react-router-dom'
import Commonbutton from '../Common/Commonbutton'
import { MdPhoneInTalk } from "react-icons/md";
const Pizza = () => {
  return (
    <>
      <div className="pizza">
        <div className="container">
            <div className="mainpizza">
                <div className="pizzaimage lg:w-[45%] w-[330px] mb-[32px]">
                  <img className='w-[417] h-[460]' src="pizza.png" alt="" />
                </div>
                <div className="pizzatext lg:w-[624px] w-[330px]">
                 <ul>
                    <Link ><li>About</li></Link>
                    <Link><li>Experience</li></Link>
                    <Link><li>Contact</li></Link>
                 </ul>
             <hr className='lg:w-[624px] w-[330px] h-[3px] bg-[#B52B1D] mb-[24px] lg:mb-0' />
                 <h2>Exceptional culinary experience and delicious food</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                
                <div className='more flex gap-[17px] lg:gap-[34px]  items-center'>
                <Commonbutton commonbuttonhead={'About More'}/>
                 <div className="phone flex items-center gap-[4px] ">
                 <MdPhoneInTalk className='text-[#BD1F17] text-[20px]' />
                 <span>+88 3426 739 485</span>
                 </div>
                
                </div>
                
                </div>
                
            </div>
            <div className="mainfast lg:flex lg:flex-row flex-col pl-[24px] lg:pl-0  items-center mt-[74px] mb-[120px] relative ">
            <div className="logo  w-[440px]">
                    <div className="icon">
                 <img src="package.png" alt="" />
                    </div>
                    <div className="fasttext">
              <h2>Fast Delivery\</h2>
              <p>Within 30 minutes</p>
                    </div>
                 </div>
                 <div className="logo mt-[20px] w-[440px]">
                    <div className="icon">
                 <img src="medal.png" alt="" />
                    </div>
                    <div className="fasttext">
              <h2>absolute dining</h2>
              <p>Best buffet restaurant</p>
                    </div>
                 </div>
                 <div className="logo mt-[20px] w-[440px]">
                    <div className="icon">
                 <img src="bag.png" alt="" />
                    </div>
                    <div className="fasttext">
              <h2>pickup delivery</h2>
              <p>Grab your food order</p>
                    </div>
                 </div>
                 <img className='absolute bottom-[20%] left-[100%]' src="rightmiddle.png" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Pizza
