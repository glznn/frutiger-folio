import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from './Home'
import Credits from './Credits'
import Contact from './Contact'
import BisBlue from './projects/BisBlue';
import Exedra from './projects/Exedra';
import { TransitionHandler } from './TransitionHandler';

function Directory() {
  return (
    <TransitionHandler>
          <Routes>
              <Route path="/" element = {<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/credits" element={<Credits />}/>
              <Route path="/bis-blue" element={<BisBlue/>}/>
              <Route path="/exedra" element={<Exedra/>}/>
          </Routes>
    </TransitionHandler>
  )
}

export default Directory