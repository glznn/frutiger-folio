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
              <div className="credits__subTitle">
                Created using‎  ‎
                <a href="https://react.dev/"
                target='_blank'
                rel="noreferrer"
                >
                React.js</a>
                <br/>
              </div>
            </div>
            <div className="credits__layout">
              <div className="credits__packages">
                <h1>Packages</h1>

                Routing
                <span id="by">by</span>
                <a href="https://reactrouter.com/"
                target='_blank'
                rel="noreferrer"
                >
                React Router</a>
                <br/>

                Route Animations
                <span id="by">by</span>
                <a href="https://motion.dev/"
                target='_blank'
                rel="noreferrer"
                >
                Framer Motion</a>
                <br/>

                <a href="https://react-icons.github.io/react-icons/search/#q=FaCaret"
                target='_blank'
                rel="noreferrer"
                >
                Arrow</a> 
                ‎ ‎ ‎

                <a href="https://react-icons.github.io/react-icons/search/#q=grmail"
                target='_blank'
                rel="noreferrer"
                >
                Mail</a> 
                ‎ ‎ ‎

                <a href="https://react-icons.github.io/react-icons/search/#q=RiFileInfo"
                target='_blank'
                rel="noreferrer"
                >
                Info</a>
                ‎ ‎
                
                Icons
                <span id="by">by</span> 
                <a href="https://react-icons.github.io/react-icons/"
                target='_blank'
                rel="noreferrer"
                >
                React Icons</a> 
                <br/>

                Form Submission Alert 
                <span id="by">by</span> 
                <a href="https://sweetalert2.github.io/"
                target='_blank'
                rel="noreferrer"
                >
                Sweet Alert</a> 
                <br/>

              </div>
              <div className="credits__assets">
                <h1>Assets</h1>

                <a href="https://pixabay.com/gifs/noise-frequency-sound-noisy-tv-18561/"
                target='_blank'
                rel="noreferrer"
                > 
                Tv-Static gif</a>
                <span id="by">by</span>
                <a href="https://www.psd-dude.com/"
                target='_blank'
                rel="noreferrer"
                > 
                Psddude</a> 
                <br/>

                <a href="https://unsplash.com/photos/a-black-and-white-photo-of-a-wall-FiGg-MpiA3o"
                target='_blank'
                rel="noreferrer"
                >
                Analog image</a> 
                <span id="by">by</span>
                <a href="https://unsplash.com/@bernardhermant"
                target='_blank'
                rel="noreferrer"
                >
                Bernard Hermant</a>
                <br/>

                <a href="https://fontesk.com/two-weekends-sans-font/"
                target='_blank'
                rel="noreferrer"
                >
                Two Weekends Sans Font</a>
                <span id="by">by</span>
                <a href="https://github.com/AlphaZTX"
                target='_blank'
                rel="noreferrer"
                >
                T. X. Zhang</a>
                <br/>
              </div>
            </div>
            <div className="credits__design">
              <h1>Design</h1>
              Portfolio Design inspired
              <span id="by">by</span> 
              <a href="https://wii.fandom.com/wiki/Wii_Menu"
              target='_blank'
              rel="noreferrer"
              >
              Ninendo Wii Menu</a>
              <br/>
              
              (This is a personal project and is not affiliated with Nintendo in any way.) <br/><br/>
              <span style={{fontStyle:"italic"}}>* Unless otherwise credited, all components were developed using JavaScript and HTML/CSS.</span>
            </div>
          </motion.div>
        </div>
    </div>
    </>
  )
}

export default Credits