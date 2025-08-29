import React from 'react'
import './Exedra.css'
import SwapArrow from '../components/SwapArrow.js'
import BottomChannel from '../components/BottomChannel'

function Exedra() {
  return (
    <div className="Exedra">
      <div className="ex__layout">
        <div className="ex__image">
          <img src="/images/exedra-preview.png"/>
        </div>
        <div className="ex__content">

        </div>
      </div>

      <SwapArrow />
      <BottomChannel />

    </div>
  )
}

export default Exedra