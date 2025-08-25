import React from 'react'
import './Exedra.css'
import BottomChannel from '../components/BottomChannel'

function Exedra() {
  return (
    <div className="Exedra">
        <div className="ex__image">
          <img src="/images/exedra-preview.png"/>
        </div>
        <BottomChannel/>
    </div>
  )
}

export default Exedra