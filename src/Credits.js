import React from 'react'
import './Credits.css'
import BottomChannel from './components/BottomChannel.js'

function Credits() {
  return (
    <div className="Credits">  
        <div className="credits__content">
          <div className="credits__header">
            Credits <br/><br/>
            Created using React <br/><br/>
          </div>
          <div className="credits__layout">
            <div className="credits__packages">
              <h1>Packages</h1>
              Sweet Alert <br/>
              - https://sweetalert2.github.io/#usage <br/>
              Routing:	<br/>
              react-router-dom <br/><br/>
            </div>
            <div className="credits__assets">
              <h1>Assets</h1>
              Tv-Static gif <br/>
              Psddude <br/>
              https://graphicriver.net/user/psddude/portfolio <br/>
              pixabay <br/>
              Analog image <br/>
              https://unsplash.com/photos/a-black-and-white-photo-of-a-wall-FiGg-MpiA3o <br/>
              Bernard Hermant <br/>
              Font (free for Commercial Use)  <br/>
              Two-weekends-sans by T. X. Zhang <br/>
              https://fontesk.com/designer/t-x-zhang/ <br/><br/>
            </div>
          </div>
          <div className="credits__design">
            <h1>Design</h1>
            Design inspired by Ninendo Wii <br/>
            Not affiliated / associated with Nintendo <br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        <BottomChannel/>
        </div>
    </div>
  )
}

export default Credits