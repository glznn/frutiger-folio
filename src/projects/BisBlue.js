import React from 'react'
import './BisBlue.css'
import BottomChannel from '../components/BottomChannel'

function BisBlue() {
  return (
    <div className="BisBlue">
      <div className="bb__layout">
        <div className="bb__image">
          <a href="http://bisblue.com"
          target="_blank"
          >
            <img src="/images/bis-blue-preview.png"/>
          </a>
        </div>
        <div className="bb__content">
          <h1> minimalist design, focus on product </h1>
          <h1> sleek, familiar interface </h1>
          <h1> integrated with shopify custom design</h1>
          <h1> dedicated mobile version </h1>
          <h1> simple modern aesthetic </h1>
        </div>
      </div>

      <BottomChannel/>

    </div>
  )
}

export default BisBlue