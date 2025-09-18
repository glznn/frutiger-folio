import React from 'react'
import './Exedra.css'

function Exedra() {

  document.title= "Project: Bis Blue"

  return (
    <div className="Exedra">
      <div className="ex__layout">
        <div className="ex__image">
          <img src="/images/exedra-preview.webp" alt="Exedra" fetchPriority='high'/>
        </div>
        <div className="ex__content">
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
          <h1>description</h1>
        </div>
      </div>
    </div>
  )
}

export default Exedra