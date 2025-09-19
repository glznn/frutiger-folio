import React from 'react'
import './BisBlue.css'

function BisBlue() {

  document.title= "Project: Bis Blue";

  return (
    <div className="BisBlue">
      <div className="bb__layout">
        <div className="bb__content">
          <img className="bb__logo" src="/images/BB_Logo.png" alt="Bis Blue Logo" fetchPriority='high'/>
          <p className="bb__desc">
            An e-commerce site designed with a minimalist, modern aesthetic 
            to align with the brand and effectively showcase products. 
          </p>
          <div className="bb__videoContainer">
            <video className="bb__video"
                fetchPriority='high'
                preload='auto'
                autoPlay 
                muted 
                loop 
                playsInline>
                  <source src="/videos/bis-blue-preview-new.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="bb__tools">
            Tools used: React.js, HTML/CSS, GraphQL, Klaviyo API,
            Shopify Hydrogen/Oxygen, and Shopify Storefront/Customer API.
          </p>
        </div>
      </div>

    </div>
  )
}

export default BisBlue