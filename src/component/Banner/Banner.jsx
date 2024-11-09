import React from 'react'

import './Banner.css'
import Commonbutton from '../Common/Commonbutton'
const Banner = () => {
  return (
    <>
      <div className="banner ">
          <div className="container ">
         <div className="mainbanner  relative px-[30px] py-[30px] lg:px-0 lg:py-0">
         <div className="bannertext ">
<h1 className=' '>Taste the authentic
Saudi cuisine</h1>
<p className=''>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
<Commonbutton  commonbuttonhead={'Explore Menu'}/>
</div>
<div className="bannerimage w-[330px] lg:w-[700px] ">
<img className='lg:ml-14 ml-0 mt-[48px] lg:mt-0  ' src="food.png" alt="" />

</div>
         </div>
          </div>
      </div>
    </>
  )
}

export default Banner
