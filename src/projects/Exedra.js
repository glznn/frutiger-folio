import React from 'react'
import './Exedra.css'

function Exedra() {

  document.title= "Project: Bis Blue"

  return (
    <div className="Exedra">
      <div className="ex__layout">
        <div className="ex__image">
          <img src="/images/exedra-preview.png" alt="Exedra"/>
        </div>
        <div className="ex__content">
          <h1> minimalist design, focus on product </h1>
          <h1> sleek, familiar interface </h1>
          <h1> integrated with shopify custom design</h1>
          <h1> dedicated mobile version </h1>
          <h1> simple modern aesthetic </h1>
        </div>
      </div>
    </div>
  )
}

export default Exedra