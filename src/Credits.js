import React from 'react'
import './Credits.css'
import { motion } from 'framer-motion'

function Credits() {

  document.title= "Portfolio Credits"

  return (
    <>
    <div className="Credits">  
        <div className="credits__content">
          <motion.div className="credits__scroll"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition= {{ duration: 5 }}
          >
            <div className="credits__header">
              <div className="credits__title">  Credits   </div>
              Created using‎  ‎
              <a href="https://react.dev/"
              target='_blank'>
              React.js</a>
              <br/>
            </div>
            <div className="credits__layout">
              <div className="credits__packages">
                <h1>Packages</h1>

                Routing
                <span id="by">by</span>
                <a href="https://reactrouter.com/"
                target='_blank'>
                React Router</a>
                <br/>

                Route Animations
                <span id="by">by</span>
                <a href="https://motion.dev/"
                target='_blank'>
                Framer Motion</a>
                <br/>

                <a href="https://react-icons.github.io/react-icons/search/#q=FaCaret"
                target='_blank'>
                Arrow</a> 
                ‎ ‎ ‎

                <a href="https://react-icons.github.io/react-icons/search/#q=grmail"
                target='_blank'>
                Mail</a> 
                ‎ ‎ ‎

                <a href="https://react-icons.github.io/react-icons/search/#q=RiFileInfo"
                target='_blank'>
                Info</a>
                ‎ ‎
                
                Icons
                <span id="by">by</span> 
                <a href="https://react-icons.github.io/react-icons/"
                target='_blank'>
                React Icons</a> 
                <br/>

                Form Submission Alert 
                <span id="by">by</span> 
                <a href="https://sweetalert2.github.io/"
                target='_blank'>
                Sweet Alert</a> 
                <br/>

              </div>
              <div className="credits__assets">
                <h1>Assets</h1>

                <a href="https://pixabay.com/gifs/noise-frequency-sound-noisy-tv-18561/"
                target='_blank'> 
                Tv-Static gif</a>
                <span id="by">by</span>
                <a href="https://www.psd-dude.com/"
                target='_blank'> 
                Psddude</a> 
                <br/>

                <a href="https://unsplash.com/photos/a-black-and-white-photo-of-a-wall-FiGg-MpiA3o"
                target='_blank'>
                Analog image</a> 
                <span id="by">by</span>
                <a href="https://unsplash.com/@bernardhermant"
                target='_blank'>
                Bernard Hermant</a>
                <br/>

                <a href="https://fontesk.com/two-weekends-sans-font/"
                target='_blank'>
                Two Weekends Sans Font</a>
                <span id="by">by</span>
                <a href="https://github.com/AlphaZTX"
                target='_blank'>
                T. X. Zhang</a>
                <br/>
              </div>
            </div>
            <div className="credits__design">
              <h1>Design</h1>
              Portfolio Design inspired
              <span id="by">by</span> 
              <a href="https://wii.fandom.com/wiki/Wii_Menu"
              target='_blank'>
              Ninendo Wii Menu</a>
              <br/>
              
              (This is a personal project and is not affiliated with Nintendo in any way.) <br/>
            </div>
          </motion.div>
        </div>
    </div>
    </>
  )
}

export default Credits