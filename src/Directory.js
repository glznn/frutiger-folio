import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Credits from './Credits'
import Contact from './Contact'
import BisBlue from './projects/BisBlue';
import Exedra from './projects/Exedra';

function Directory() {
  return (
    <Router>
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/credits" element={<Credits />}/>
            <Route path="/bis-blue" element={<BisBlue/>}/>
            <Route path="/exedra" element={<Exedra/>}/>
        </Routes>
    </Router>
  )
}

export default Directory