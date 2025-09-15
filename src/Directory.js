import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home'
import Credits from './Credits'
import Contact from './Contact'
import Promo from './Promo';
import Game from './Game';
import BisBlue from './projects/BisBlue';
import Exedra from './projects/Exedra';
import Error404 from './Error404';
import { TransitionHandler } from './TransitionHandler';

function Directory() {
  return (
    <TransitionHandler>
          <Routes>
              <Route path="/" element = {<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/credits" element={<Credits />}/>
              <Route path="/bis-blue" element={<BisBlue />}/>
              <Route path="/exedra" element={<Exedra />}/>
              <Route path="/promo" element={<Promo />}/>
              <Route path="/game" element={<Game />}/>
              <Route path="/error404" element={<Error404 />}/>
              <Route path="*" element={<Navigate to="/error404" replace/>}/>
          </Routes>
    </TransitionHandler>
  )
}

export default Directory