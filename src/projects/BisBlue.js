import React from 'react'
import './BisBlue.css'
import BottomChannel from '../components/BottomChannel'

function BisBlue() {
  return (
    <div className="BisBlue">
      <div className="bb__layout">
        <div className="bb__image">
          <img src="/images/bis-blue-preview.png"/>
        </div>
        <div className="bb__content">
          <h1> classic, timeless design </h1>
          <h1> sleek user interface </h1>
          <h1> integrated with shopify </h1>
          <h1> mobile version </h1>
          <h1> simple modern aesthetic </h1>
        </div>
      </div>

      <BottomChannel/>

    </div>
  )
}

export default BisBlue