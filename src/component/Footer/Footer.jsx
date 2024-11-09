import React from 'react'
import './Footer.css'
import { IoMdTime } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { TiMessage } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
<div className="footer text-center bg-[url('Footer.png')] bg-no-repeat bg-cover bg-center pt-[120px] pb-[171px]">
<div className="container">
<h2 className='font-bebas font-bold text-[40px] w-[330px] lg:text-[62px] mx-auto lg:w-[1320px] text-white mb-[51px]'>We ready to have you the best dining experiences</h2>
<div className="parent lg:flex flex-col   lg:flex-row text-center justify-between">
  <div className="one   ">
  <IoMdTime className='text-[#FEBF00] text-[20px] mx-auto' />
  <h5 className='font-bebas font-bold text-[24px] text-[#FFFFFF] mt-[27px] mb-[12px]'>Opening hours</h5>
  <h4>Monday - Sunday</h4>
  <p>9:00 AM to 11:30 PM</p>
  </div>
  <div className="two ">
  <FiPhoneCall className='  text-[#FEBF00] text-[20px] mx-auto' />

  <h5 className='font-bebas font-bold text-[24px] text-[#FFFFFF] mt-[27px] mb-[12px]'>LET'S TALK</h5>
  <h4>Phone: 1-800-222-4545</h4>
  <p>Fax: 1-800-222-4545</p>
  </div>
  <div className="three">
  <TiMessage className='  text-[#FEBF00] text-[20px] mx-auto'/>
  <h5 className='font-bebas font-bold text-[24px] text-[#FFFFFF] mt-[27px] mb-[12px]' >BOOK A TABLE</h5>
  <h4>Email: demo@website.com</h4>
  <p>pport: support@website.com</p>
  </div>
  <div className="four">
  <IoLocation className='text-[#FEBF00] text-[20px] mx-auto'/>
  <h5 className='font-bebas font-bold text-[24px] text-[#FFFFFF] mt-[27px] mb-[12px]'>Opening hours</h5>
  <h4>123 Stree New York City , United</h4>
  <p>States Of America.</p>
  </div>
</div>
<div className="icons flex justify-center items-center gap-[17px] mt-[120px] text-center">
  <div className='w-[53px] h-[53px] border-2 border-white px-[13px] py-[14px] rounded-[50%]'>
  <CiFacebook className='text-[#E5E7EB] text-[24px]' /></div>
<div className=' w-[53px] h-[53px] border-2 border-white px-[13px] py-[14px] rounded-[50%]'><RiTwitterXLine className='text-[#E5E7EB] text-[24px]' /></div>
<div className='w-[53px] h-[53px] border-2 border-white px-[13px] py-[14px] rounded-[50%]'><FaInstagram className='text-[#E5E7EB] text-[24px]' /></div>
<div className='w-[53px] h-[53px] border-2 border-white px-[13px] py-[14px] rounded-[50%]'><FaLinkedin className='text-[#E5E7EB] text-[24px] ' /></div>
</div>
<p className='text-center mt-[25px] text-[21px] font-inter text-white'>© 2023 All Rights Reserved </p>
</div>
</div>
    </>
  )
}

export default Footer
