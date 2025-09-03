import React from 'react'
import './Contact.css'
import SwapArrow from './components/SwapArrow.js'
import BottomChannel from './components/BottomChannel.js'
import { ContactMe } from './Home.js'

function Contact() {
  return (
    <div className="Contact">
      <ContactMe />
      <SwapArrow />
      <BottomChannel buttonText={"Contact"} pathName={"/"}/>
    </div>
  )
}

export default Contact