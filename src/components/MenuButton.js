import React from 'react'

import './MenuButton.css'
import { useNavigate } from 'react-router-dom'

function MenuButton( {text, path} ) {

  const navigate = useNavigate();

  return (
    <button className="MenuButton"
    onClick={() => {
        if (typeof document !== 'undefined' && 'startViewTransition' in document)
        {
          document.startViewTransition(() => {
          navigate(path);
          });
        }
        else {
          navigate(path);
        }
    }}
    >   {text}    </button>
  )
}

export default MenuButton