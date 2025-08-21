import React from 'react'

import './MenuButton.css'
import { useNavigate } from 'react-router-dom'

function MenuButton() {

  const navigate = useNavigate();

  return (
    <button className="MenuButton"
    onClick={() => {
        document.startViewTransition(() => {
        navigate("/");
      });
    }}
    >   Menu    </button>
  )
}

export default MenuButton