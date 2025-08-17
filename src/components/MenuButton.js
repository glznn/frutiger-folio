import React from 'react'

import './MenuButton.css'

function MenuButton() {
  return (
    <button className="MenuButton"
    onClick={() => {
        window.location.pathname = '/'
    }}
    >   Menu    </button>
  )
}

export default MenuButton