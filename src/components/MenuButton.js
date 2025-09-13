import React from 'react'

import './MenuButton.css'
import { useNavigate } from 'react-router-dom'

function MenuButton( {text, link} ) {

  const navigate = useNavigate();

  return (
    <button className="MenuButton"
    onClick={() => {
        if (link.substring(0,1) === '/') {
          if (typeof document !== 'undefined' && 'startViewTransition' in document)
          {
            document.startViewTransition(() => {
            navigate(link);
            });
          }
          else {
            navigate(link);
          }
        }
        else {
          window.open(link, "_blank");
        }
      }
    }
    >   {text}    </button>
  )
}

export default MenuButton