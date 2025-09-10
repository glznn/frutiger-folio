import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'
import { ContactMe } from './Home.js'

function Contact() {

  document.title= "Contact Me";

  const navigate = useNavigate();

  return (
    <div className="Contact">
      <div className="contact__layout">
          <ContactMe onClose={() => {
            if (typeof document !== 'null' && 'startViewTransition' in document) {
              document.startViewTransition(() => {
                navigate('/');
              })
            }
            else {
              navigate('/');
            }
          }}/>
      </div>
    </div>
  )
}

export default Contact