import React from 'react'
import './Exedra.css'
import BottomChannel from '../components/BottomChannel'

function Exedra() {

  document.title= "Project: Bis Blue"

  return (
    <div className="Exedra">
      <div className="ex__layout">
        <div className="ex__image">
          <img src="/images/exedra-preview.png"/>
        </div>
        <div className="ex__content">

        </div>
      </div>

      <BottomChannel buttonText={"Learn more"} pathName={"/"} />

    </div>
  )
}

export default Exedra