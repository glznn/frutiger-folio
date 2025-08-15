import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App'
import Credits from './Credits'

function Directory() {
  return (
    <Router>
        <Routes>
            <Route path="/" element = {<App />}/>
            <Route path="/credits" element={<Credits />}/>
        </Routes>
    </Router>
  )
}

export default Directory