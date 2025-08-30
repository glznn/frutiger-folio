import React from 'react'

import './MenuButton.css'
import { useNavigate } from 'react-router-dom'

function MenuButton( {text, path} ) {

  const navigate = useNavigate();

  return (
    <button className="MenuButton"
    onClick={() => {
        document.startViewTransition(() => {
        navigate(path);
      });
    }}
    >   {text}    </button>
  )
}

export default MenuButton