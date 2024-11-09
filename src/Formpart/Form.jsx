import React from 'react'
import './Form.css'
import CommonHead from '../component/Common/CommonHead'
import CommonHead4 from '../component/Common/CommonHead4'
import Commonbutton from '../component/Common/Commonbutton'
import { CgCalendarDates } from "react-icons/cg";
import { CgArrowsScrollV } from "react-icons/cg";
const Form = () => {
  return (
    <>
      <div className="formpart bg-[url('form.png')] bg-no-repeat bg-cover bg-center lg:pb-[120px] lg:pt-[120px] px-[30px] py-[30px] lg:px-0 lg:py-0">
        <div className="container">
         <CommonHead commonheadtext={'Book Now'}/>
         <h3 className='text-white'>Book Your Table</h3>
         <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
         <form action="">
          <div className="input lg:flex flex-col  lg:flex-row lg:gap-[46px] mb-0 lg:mb-[30px] ">
            <input placeholder='Your Name * ' type="text" />
            <input placeholder='Your Email ' type="text" />
          </div>
          <div className="input relative lg:flex flex-col lg:flex-row  lg:gap-[46px] ">
            <input  placeholder='Reservation Date' className=''  type="text" /><CgCalendarDates className='absolute bottom-[75%] left-[85%] lg:left-[21%] lg:top-[35%] text-[20px]  text-white'  />
            <input placeholder='Total People' type="text" /><CgArrowsScrollV className='absolute lg:left-[48%] bottom-[25%] left-[85%] lg:top-[35%] text-white text-[16px]' />
          </div>
          <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
         </form>
         <Commonbutton commonbuttonhead={'Book Now'}/>
        </div>
      </div>
    </>
  )
}

export default Form
