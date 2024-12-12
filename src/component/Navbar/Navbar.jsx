import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import Commonbutton from '../Common/Commonbutton';
import './Navbar.css'
import { FaBars } from "react-icons/fa";

// custom use state

const Navbar = () => {

  const[show,setShow]=useState(false)
  const tapshow=()=>{
    setShow(!show)
  }


  return (
    <>
      <nav className='mainmenu '>
       <div className="container  ">
        <div className="menu  ">
          <div className="logo  ">
           <img className='cursor-pointer  ' src="Logo.png" alt="logo.png" />
           <ul   className="lg:flex hidden ">
            <li><Link className="text-lg font-medium font-Railway   hover:text-green-600 text-black" to="#">Home</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">About</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Portfolio</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Clients</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Blog</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Contact</Link></li>
            <div className="buttonnav lg:items-center">
            <button className="bg-[#FEBF00] font-bold text-[#0A1425] px-[25px] py-[10px] font-Roboto text-[16px] ml-0 lg:ml-[292px]  hover:text-green-600 lg:rounded-none rounded-[10px] ">
              Book a Table
            </button>
            </div>
            
          </ul>
          {
            show &&
            <ul   className=" ">
            <li><Link className="text-lg font-medium font-Railway   hover:text-green-600 text-black" to="#">Home</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">About</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Portfolio</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Clients</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Blog</Link></li>
            <li><Link className="text-lg font-medium font-Railway  hover:text-green-600 text-black" to="#">Contact</Link></li>
            <div className="buttonnav lg:items-center">
            <button className="bg-[#FEBF00] font-bold text-[#0A1425] px-[25px] py-[10px] font-Roboto text-[16px] ml-0 lg:ml-[292px]  hover:text-green-600 lg:rounded-none rounded-[10px] ">
              Book a Table
            </button>
            </div>
            
          </ul>
               
          }

           
          
<FaBars onClick={tapshow} className="lg:hidden block cursor-pointer text-white relative z-20" />
          
          </div>
          
        </div>
       </div>
      </nav>
    </>
  )
}

export default Navbar
