import React from 'react'
import './Contact.css'
import SwapArrow from './components/SwapArrow.js'
import BottomChannel from './components/BottomChannel.js'

function Contact() {
  return (
    <div className="Contact">
      <SwapArrow />
      <BottomChannel buttonText={"Contact"} pathName={"/"}/>
    </div>
  )
}

export default Contact