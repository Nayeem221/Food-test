import React from 'react'
import './CommonHead.css'
const CommonHead = ({commonheadtext}) => {
  return (
    <>
      <div className="commonhead ">
        <div className="image">
        <img className='' src="dot.png" alt="" />
        </div>
        <h3>{commonheadtext}</h3>
      </div>
    </>
  )
}

export default CommonHead
