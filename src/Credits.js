import React from 'react'
import './Credits.css'
import BottomChannel from './components/BottomChannel.js'

function Credits() {
  return (
    <div className="Credits">  
        <div className="credits__content">
          <div className="credits__header">
            Credits <br/>
            Created using React <br/>
          </div>
          <div className="credits__layout">
            <div className="credits__packages">
              <h1>Packages</h1>
              <a href="https://sweetalert2.github.io/">
              Sweet Alert </a> 
              <br/>
              <a href="https://reactrouter.com/">
              React Router </a>
              <br/>
            </div>
            <div className="credits__assets">
              <h1>Assets</h1>

              <a href="https://pixabay.com/gifs/noise-frequency-sound-noisy-tv-18561/"> 
              Tv-Static gif </a>
              by 
              <a href="https://www.psd-dude.com/"> 
              Psddude </a> 
              <br/>

              <a href="https://unsplash.com/photos/a-black-and-white-photo-of-a-wall-FiGg-MpiA3o">
              Analog image </a> 
              by
              <a href="https://unsplash.com/@bernardhermant">
              Bernard Hermant </a>
              <br/>

              <a href="https://fontesk.com/two-weekends-sans-font/">
              Two Weekends Sans Font </a>
              by 
              <a href="https://github.com/AlphaZTX">
              T. X. Zhang </a>
              <br/>
            </div>
          </div>
          <div className="credits__design">
            <h1>Design</h1>
            Design inspired by 
            <a href="https://wii.fandom.com/wiki/Wii_Menu">
            Ninendo Wii Menu </a>
            <br/>
            
            (I am not affiliated with Nintendo!) <br/><br/><br/><br/>
          </div>
        <BottomChannel/>
        </div>
    </div>
  )
}

export default Credits