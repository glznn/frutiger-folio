import React from 'react'

import './MenuButton.css'
import { useNavigate } from 'react-router-dom'

function MenuButton( {text} ) {

  const navigate = useNavigate();

  return (
    <button className="MenuButton"
    onClick={() => {
        document.startViewTransition(() => {
        navigate("/");
      });
    }}
    >   {text}    </button>
  )
}

export default MenuButton