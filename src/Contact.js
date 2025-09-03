import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'
import SwapArrow from './components/SwapArrow.js'
import { ContactMe } from './Home.js'

function Contact() {

  const navigate = useNavigate();

  return (
    <div className="Contact">
      <div className="contact__layout">
          <ContactMe onClose={() => 
              document.startViewTransition(() => {
                navigate('/');
              })
          }/>
      </div>
      <SwapArrow />
    </div>
  )
}

export default Contact