import React from 'react'
import './Credits.css'
import BottomChannel from './components/BottomChannel.js'

function Credits() {
  return (
    <div className="Credits">  
        <div className="credits__content">
            Credits <br/><br/>
            Created using React <br/><br/>
            Packages <br/><br/>
            Sweet Alert <br/>
            https://sweetalert2.github.io/#usage <br/>
            Routing:	<br/>
            react-router-dom <br/><br/>
            Assets <br/><br/>
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
            Design <br/><br/>
            Design inspired by Ninendo Wii <br/>
            Not affiliated / associated with Nintendo <br/>
         <BottomChannel/>
        </div>
    </div>
  )
}

export default Credits