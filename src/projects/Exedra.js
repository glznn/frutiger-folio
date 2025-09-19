import React from 'react'
import './Exedra.css'

function Exedra() {

  document.title= "Project: Bis Blue"

  return (
    <div className="Exedra">
      <div className="ex__layout">
        <div className="ex__content">
          <h1 className="ex__logo">
            exedra.app
          </h1>
          <p className="ex__desc">
            An online character database for the Madoka Magica Exedra mobile app. 
            Designed to match the app’s look-and-feel, it includes a simulator that 
            replicates gacha mechanics so users can test pulls.
          </p>
          <div className="ex__videoContainer">
            <video className="ex__video"
                fetchPriority='high'
                preload='auto'
                autoPlay 
                muted 
                loop 
                playsInline>
                  <source src="/videos/exedra-preview-new.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="ex__tools">
            Tools used: React.js, HTML/CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default Exedra