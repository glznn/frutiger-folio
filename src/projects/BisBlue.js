import React from 'react'
import './BisBlue.css'

function BisBlue() {

  document.title= "Project: Bis Blue";

  return (
    <div className="BisBlue">
      <div className="bb__layout">
        <div className="bb__image">
          <img src="/images/bis-blue-preview.webp" alt="Bis Blue"/>
        </div>
        <div className="bb__content">
          <img className="bb__logo" src="/images/BB_Logo.png" alt="Bis Blue Logo" fetchPriority='high'/>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          {/* <h1> minimalist design, focus on product </h1>
          <h1> sleek, familiar interface </h1>
          <h1> integrated with shopify custom design</h1>
          <h1> dedicated mobile version </h1>
          <h1> simple modern aesthetic </h1> */}
        </div>
      </div>

    </div>
  )
}

export default BisBlue