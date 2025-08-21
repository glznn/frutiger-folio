import React from 'react'

import './BottomChannel.css'
import MenuButton from './MenuButton'

function BottomChannel() {
  return (
    <div className="BottomChannel">
        <div className="bottomChannel__bar">
          <div className="bottomChannel__buttons">
            <div className="bottomChannel__menu">
            <MenuButton text="Menu" />
            </div>
            <div className="bottomChannel__viewMore">
            <MenuButton text="View More" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default BottomChannel